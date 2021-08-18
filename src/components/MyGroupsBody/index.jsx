import {
  ContainerBody,
  ContainerGroups,
  SearchPlace,
  SearchBar,
} from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import MyGroupsList from "../MyGroupsList";
import MySuggestedGroups from "../MySuggestedGroups";
import { Link } from "react-router-dom";
const MyGroupsBody = () => {
  return (
    <ContainerBody>
      <ContainerGroups>
        <h2>meus grupos</h2>
        <MyGroupsList />
      </ContainerGroups>

      <ContainerGroups>
        <h2>grupos sugeridos</h2>
        <MySuggestedGroups />
        <SearchPlace>
          <p>deseja ver mais? busque novos grupos</p>
          <Link to="/searchgroup">
            <SearchBar>
              buscar novos grupos <SearchIcon />
            </SearchBar>
          </Link>
        </SearchPlace>
      </ContainerGroups>
    </ContainerBody>
  );
};

export default MyGroupsBody;
