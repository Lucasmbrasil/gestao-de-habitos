import { useState, useContext } from "react";
import { GroupListContext } from "../../Providers/GroupList";
import { Container, BackgroundDiv, PaperDiv, InputPaper } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { cyan } from "@material-ui/core/colors";
import { InputBase } from "@material-ui/core";
import CardAvailableGroup from "../CardsGroupsPage/CardAvailableGroup";
const SearchGroups = () => {
  const { group } = useContext(GroupListContext);
  const [search, setSearch] = useState("");
  const filtered = group.filter((value) =>
    value.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(filtered)
  return (
    <Container>
      <InputPaper>
        <InputBase
          placeholder='Ex: "Menos fastfood!"'
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon style={{ color: cyan[900] }} />
      </InputPaper>
      <BackgroundDiv>
        <PaperDiv elevation="6">
          {filtered &&
            filtered.map((group, index) => (
              <CardAvailableGroup
                name={group.name}
                description={group.description}
                category={group.category}
              />
            ))}
        </PaperDiv>
      </BackgroundDiv>
    </Container>
  );
};

export default SearchGroups;
