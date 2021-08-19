import { useContext } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { useGetGroupActivities } from "../GetGroupActivities";
import { useGetGroupGoals } from "../GetGroupGoals";

const DeleteContext = createContext();

export const DeleteProvider = ({ children }) => {
  const getToken = window.localStorage.getItem("token");
  const { handleGoal } = useGetGroupGoals();
  const { handleActivities } = useGetGroupActivities();

  const handleDeleteGoal = (goal) => {
    api
      .delete(`/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => handleGoal())
      .catch((e) => console.log(e));
  };
  const handleDeleteActivity = (activity) => {
    api
      .delete(`/activities/${activity.id}/`, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => handleActivities())
      .catch((e) => console.log(e));
  };
  return (
    <DeleteContext.Provider value={{ handleDeleteGoal, handleDeleteActivity }}>
      {children}
    </DeleteContext.Provider>
  );
};

export const useDelete = () => useContext(DeleteContext);
