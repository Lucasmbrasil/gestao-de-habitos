import { useContext } from "react";
import { useCallback } from "react";
import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api.jsx";
import jwt_decode from "jwt-decode";

const HabitsListContext = createContext();

const getToken = window.localStorage.getItem("token");
const decodeToken = jwt_decode(getToken);
const userID = decodeToken.user_id;

export const HabitsListProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const handleList = useCallback(() => {
    const token = window.localStorage.getItem("token");
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <HabitsListContext.Provider
      value={{ handleList, habits, setHabits, getToken, decodeToken, userID }}
    >
      {children}
    </HabitsListContext.Provider>
  );
};

export const useHabitList = () => useContext(HabitsListContext);
