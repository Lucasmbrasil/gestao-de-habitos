import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api.jsx";

const HabitsListContext = createContext();

export const HabitsListProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const [habits, setHabits] = useState([]);

  const handleLog = () => {
    const data = {
      username: "asdf995",
      password: "123456",
    };
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);
        console.log(response);
        setToken(window.localStorage.getItem("token"));
      })
      .catch((e) => console.log(e));
  };
  const handleList = () => {
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((e) => console.log(e));
  };

  return (
    <HabitsListContext.Provider
      value={{ handleLog, handleList, habits, setHabits }}
    >
      {children}
    </HabitsListContext.Provider>
  );
};

export const useHabitList = () => useContext(HabitsListContext);
