import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useMyGroupsList } from "../MyGroupsList";
import { useSpecificGroup } from "../SpecificGroup";

const SubscribeGroupContext = createContext();

export const SubscribeGroupProvider = ({ children }) => {
  const handleSubscribeGroup = (specificGroup) => {
    const getToken = window.localStorage.getItem("token");
    api
      .post(`/groups/${specificGroup.id}/subscribe/`, "", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => toast.success("Inscrição realizada com sucesso!"))
      .catch((e) => console.log(e));
  };
  return (
    <SubscribeGroupContext.Provider value={{ handleSubscribeGroup }}>
      {children}
    </SubscribeGroupContext.Provider>
  );
};
export const useSubscribeGroup = () => useContext(SubscribeGroupContext);
