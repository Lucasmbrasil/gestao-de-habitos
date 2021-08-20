import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../services/api";

export const SearchGroupContext = createContext();

export const SearchGroupProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState();

  const searchGroups = () => {
    setLoading(true);
    setSearched(false);
    api
      .get(`/groups/?search=${search}`)
      .then((response) => setSearchResults(response.data.results))
      .then((res) => {
        setSearched(true);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <SearchGroupContext.Provider
      value={{ setSearch, searched, loading, searchResults, searchGroups }}
    >
      {children}
    </SearchGroupContext.Provider>
  );
};

export const useSearchGroup = () => useContext(SearchGroupContext);
