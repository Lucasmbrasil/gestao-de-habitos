import { useCallback, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { useSpecificGroup } from "../SpecificGroup";

const GetGroupActivitiesContext = createContext();

export const GetGroupActivitiesProvider = ({ children }) => {
  const { specificGroup } = useSpecificGroup();
  const [countActivities, setCountActivities] = useState(1);
  const [activities, setActivities] = useState([]);
  const [previousActivitiesPage, setPreviousActivitiesPage] = useState();
  const [nextActivitiesPage, setNextActivitiesPage] = useState();

  const handleActivities = useCallback(() => {
    api
      .get(`activities/?group=${specificGroup.id}&page=${countActivities}`)
      .then((res) => {
        setActivities(res.data.results);
        setPreviousActivitiesPage(res.data.previous);
        setNextActivitiesPage(res.data.next);
      })
      .catch((e) => console.log(e));
  }, [countActivities, specificGroup.id]);
  return (
    <GetGroupActivitiesContext.Provider
      value={{
        handleActivities,
        activities,
        countActivities,
        setCountActivities,
        previousActivitiesPage,
        nextActivitiesPage,
      }}
    >
      {children}
    </GetGroupActivitiesContext.Provider>
  );
};
export const useGetGroupActivities = () =>
  useContext(GetGroupActivitiesContext);
