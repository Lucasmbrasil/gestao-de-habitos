import { useContext, useState } from "react";
import { createContext } from "react";
import api from "../../services/api";

const MyGroupsListContext = createContext();

export const MyGroupsListProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);

  const handleMyGroupsList = () => {
    const getToken = window.localStorage.getItem("token");
    api
      .get("/groups/subscriptions/", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => setMyGroups(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <MyGroupsListContext.Provider value={{ handleMyGroupsList, myGroups }}>
      {children}
    </MyGroupsListContext.Provider>
  );
};

export const useMyGroupsList = () => useContext(MyGroupsListContext);
