import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useMyGroupsList } from "../MyGroupsList";

const SubscribeGroupContext = createContext();

export const SubscribeGroupProvider = ({ children }) => {
  const [register, setRegister] = useState(false);

  const handleSubscribeGroup = (specificGroup) => {
    const getToken = window.localStorage.getItem("token");
    api
      .post(`/groups/${specificGroup.id}/subscribe/`, "", {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => toast.success("Inscrição realizada com sucesso!"))
      .then((res) =>
        api
          .get("/groups/subscriptions/", {
            headers: { Authorization: `Bearer ${getToken}` },
          })
          .then((res) => {
            setRegister(true);
          })
          .catch((e) => console.log(e))
      );
  };
  return (
    <SubscribeGroupContext.Provider value={{ handleSubscribeGroup, register }}>
      {children}
    </SubscribeGroupContext.Provider>
  );
};
export const useSubscribeGroup = () => useContext(SubscribeGroupContext);
