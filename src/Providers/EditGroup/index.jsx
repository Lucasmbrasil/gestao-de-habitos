import { useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";

const EditGroupContext = createContext();

export const EditGroupProvider = ({ children }) => {
  const handleEditGroup = (data, specificGroup) => {
    const getToken = window.localStorage.getItem("token");
    api
      .patch(`/groups/${specificGroup.id}/`, data, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <EditGroupContext.Provider value={{ handleEditGroup }}>
      {children}
    </EditGroupContext.Provider>
  );
};

export const useEditGroup = () => useContext(EditGroupContext);
