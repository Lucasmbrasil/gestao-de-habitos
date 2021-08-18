import { useCallback } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";

const SpecificGroupContext = createContext();

export const SpecificGroupProvider = ({ children }) => {
  const [specificGroup, setSpecificGroup] = useState("");

  const handleSpecificGroup = useCallback((groupID) => {
    api
      .get(`/groups/${groupID}/`)
      .then((res) => setSpecificGroup(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <SpecificGroupContext.Provider
      value={{ handleSpecificGroup, specificGroup, setSpecificGroup }}
    >
      {children}
    </SpecificGroupContext.Provider>
  );
};

export const useSpecificGroup = () => useContext(SpecificGroupContext);
