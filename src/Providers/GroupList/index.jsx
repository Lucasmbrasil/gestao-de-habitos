import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api.jsx";

export const GroupListContext = createContext();

export const GroupListProvider = ({ children }) => {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    api
      .get(`/groups/`)
      .then((response) => {
        // console.log(response.data.results)
        setGroup(response.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <GroupListContext.Provider value={{ group }}>
      {children}
    </GroupListContext.Provider>
  );
};

export const useGroupList = () => useContext(GroupListContext);
