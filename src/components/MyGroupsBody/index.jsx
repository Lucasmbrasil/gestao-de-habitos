import {
  ContainerBody,
  ContainerGroups,
  SearchPlace,
  SearchBar,
  ButtonAddGroup,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import MyGroupsList from "../MyGroupsList";
import MySuggestedGroups from "../MySuggestedGroups";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ModalGroup from "../ModalContainer/ModalGroup";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const MyGroupsBody = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const [createGroup, setCreateGroup] = useState(false);

  const handleButtonClose = () => {
    setCreateGroup(false);
  };

  return (
    <ContainerBody>
      <ContainerGroups>
        <h2>meus grupos</h2>
        <MyGroupsList />
        {!desktop && (
          <ButtonAddGroup onClick={() => setCreateGroup(true)}>
            <AddCircleOutlineIcon fontSize="small" /> criar novo grupo
          </ButtonAddGroup>
        )}
        {createGroup && (
          <ModalGroup
            handleButtonClose={handleButtonClose}
            setCreateGroup={setCreateGroup}
          />
        )}
      </ContainerGroups>
    </ContainerBody>
  );
};

export default MyGroupsBody;
