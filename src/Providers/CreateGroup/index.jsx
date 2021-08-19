import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const CreateGroupContext = createContext();

export const CreateGroupProvider = ({ children }) => {
  const handleCreateGroup = (data) => {
    const getToken = window.localStorage.getItem("token");
    api
      .post(`/groups/`, data, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) => response)
      .catch((e) => console.log(e));
  };

  return (
    <CreateGroupContext.Provider value={{ handleCreateGroup }}>
      {children}
    </CreateGroupContext.Provider>
  );
};

export const useCreateGroup = () => useContext(CreateGroupContext);
