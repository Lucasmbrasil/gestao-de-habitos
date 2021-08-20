import { useCallback, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { useSpecificGroup } from "../SpecificGroup";

const GetGroupGoalsContext = createContext();

export const GetGroupGoalsProvider = ({ children }) => {
  const { specificGroup } = useSpecificGroup();
  const [count, setCount] = useState(1);
  const [goals, setGoals] = useState([]);
  const [previousGoalsPage, setPreviousGoalsPage] = useState();
  const [nextGoalsPage, setNextGoalsPage] = useState();

  const handleGoal = useCallback(() => {
    api
      .get(`goals/?group=${specificGroup.id}&page=${count}`)
      .then((res) => {
        setGoals(res.data.results);
        setPreviousGoalsPage(res.data.previous);
        setNextGoalsPage(res.data.next);
      })
      .catch((e) => console.log(e));
  }, [count, specificGroup.id]);
  return (
    <GetGroupGoalsContext.Provider
      value={{
        handleGoal,
        goals,
        count,
        setCount,
        previousGoalsPage,
        nextGoalsPage,
      }}
    >
      {children}
    </GetGroupGoalsContext.Provider>
  );
};
export const useGetGroupGoals = () => useContext(GetGroupGoalsContext);
