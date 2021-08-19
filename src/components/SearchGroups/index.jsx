import { useState, useContext } from "react";
import { GroupListContext } from "../../Providers/GroupList";
import { Container, BackgroundDiv, PaperDiv, InputPaper } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { cyan } from "@material-ui/core/colors";
import { InputBase } from "@material-ui/core";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import { useMyGroupsList } from "../../Providers/MyGroupsList";
import api from "../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSearchGroup } from "../../Providers/SearchGroup";

const SearchGroups = () => {
  const { group, count, previousPage, nextPage, setCount } =
    useContext(GroupListContext);
  const { setSearch, searched, loading, searchResults, searchGroups } =
    useSearchGroup();
  const { handleSpecificGroup } = useSpecificGroup();
  const { handleMyGroupsList } = useMyGroupsList();

  return (
    <Container>
      <ToastContainer />

      <InputPaper>
        <InputBase
          placeholder='Ex: "Menos fastfood!"'
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon
          style={{ color: cyan[900] }}
          onClick={() => searchGroups()}
        />
      </InputPaper>
      <BackgroundDiv>
        <PaperDiv elevation={6}>
          {searched ? (
            searchResults.length > 0 ? (
              searchResults.map((item, index) => (
                <Card
                  key={index}
                  onClick={() => {
                    handleMyGroupsList();
                    handleSpecificGroup(item.id);
                  }}
                >
                  <h3>{item.name}</h3>
                  <h5>{item.description}</h5>
                  <p>{item.category}</p>
                </Card>
              ))
            ) : (
              <h2>Nenhum resultado encontrado</h2>
            )
          ) : loading ? (
            <CircularProgress />
          ) : (
            <>
              {group.map((item) => (
                <Card
                  key={item.id}
                  onClick={() => {
                    handleMyGroupsList();
                    handleSpecificGroup(item.id);
                  }}
                >
                  <h3>{item.name}</h3>
                  <h5>{item.description}</h5>
                  <p>{item.category}</p>
                </Card>
              ))}
              {previousPage !== null && (
                <button onClick={() => setCount(count - 1)}>Voltar</button>
              )}
              {nextPage !== null && (
                <button onClick={() => setCount(count + 1)}>Avançar</button>
              )}
            </>
          )}
        </PaperDiv>
      </BackgroundDiv>
    </Container>
  );
};

export default SearchGroups;
