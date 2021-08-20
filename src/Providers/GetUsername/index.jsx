import { useCallback, useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import api from "../../services/api.jsx";
import jwt_decode from "jwt-decode";

export const GetUsernameContext = createContext();

export const GetUsernameProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  const getUsername = useCallback(() => {
    const getToken = window.localStorage.getItem("token");
    const decodeToken = jwt_decode(getToken);
    const userID = decodeToken.user_id;
    api
      .get(`/users/${userID}/`)
      .then((response) => {
        setUsername(response.data.username);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <GetUsernameContext.Provider value={{ username, getUsername }}>
      {children}
    </GetUsernameContext.Provider>
  );
};

export const useGetUsername = () => useContext(GetUsernameContext);
