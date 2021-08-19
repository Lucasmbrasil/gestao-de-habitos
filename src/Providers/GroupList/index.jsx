import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api.jsx";

export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [group, setGroup] = useState([]);
  const [count, setCount] = useState(1);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();

  useEffect(() => {
    api
      .get(`/groups/?page=${count}`)
      .then((response) => {
        setPreviousPage(response.data.previous);
        setNextPage(response.data.next);
        setGroup(response.data.results);
      })
      .catch((e) => console.log(e));
  }, [count]);

  return (
    <GroupListContext.Provider
      value={{ group, count, setCount, previousPage, nextPage }}
    >
      {children}
    </GroupListContext.Provider>
  );
};

export const useGroupList = () => useContext(GroupListContext);
