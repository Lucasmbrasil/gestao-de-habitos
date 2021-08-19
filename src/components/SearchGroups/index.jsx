import { useState, useContext } from "react";
import { GroupListContext } from "../../Providers/GroupList";
import {
  Container,
  BackgroundDiv,
  PaperDiv,
  InputPaper,
  Card,
  Button,
  ButtonNext,
  ButtonPrevious,
  ButtonContainer,
} from "./styles";
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
import CardGroup from "../CardsGroupsPage/CardGroup";

const SearchGroups = () => {
  const { group, count, previousPage, nextPage, setCount } =
    useContext(GroupListContext);
  const { setSearch, searched, loading, searchResults, searchGroups } =
    useSearchGroup();
  const { handleSpecificGroup } = useSpecificGroup();
  const { handleMyGroupsList } = useMyGroupsList();

  return (
    <Container>
      <ToastContainer autoClose={2000} position="top-center" />

      <InputPaper>
        <InputBase
          fullWidth
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
              searchResults.map((group) => (
                <CardGroup
                  pointer={true}
                  handleSpecificGroup={handleSpecificGroup}
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  description={group.description}
                  category={group.category}
                  onClick={() => {
                    handleMyGroupsList();
                    handleSpecificGroup(group.id);
                  }}
                />
              ))
            ) : (
              <h2>Nenhum resultado encontrado</h2>
            )
          ) : loading ? (
            <CircularProgress />
          ) : (
            <>
              {group.map((group) => (
                <CardGroup
                  pointer={true}
                  handleSpecificGroup={handleSpecificGroup}
                  key={group.id}
                  id={group.id}
                  name={group.name}
                  description={group.description}
                  category={group.category}
                  onClick={() => {
                    handleMyGroupsList();
                    handleSpecificGroup(group.id);
                  }}
                />
              ))}
            </>
          )}
        </PaperDiv>
        <ButtonPrevious onClick={() => setCount(count - 1)}>
          Voltar
        </ButtonPrevious>
        <ButtonNext onClick={() => setCount(count + 1)}>Avançar</ButtonNext>
      </BackgroundDiv>
    </Container>
  );
};

export default SearchGroups;
