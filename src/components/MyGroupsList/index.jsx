import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useMyGroupsList } from "../../Providers/MyGroupsList";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import CardGroup from "../CardsGroupsPage/CardGroup";
import { GroupsContainer } from "./styles";
const MyGroupsList = () => {
  const { handleMyGroupsList, myGroups } = useMyGroupsList();
  const { handleSpecificGroup } = useSpecificGroup();

  useEffect(() => {
    handleMyGroupsList();
  }, [handleMyGroupsList]);

  return (
    <GroupsContainer>
      {myGroups.map((group) => (
        <CardGroup
          pointer={true}
          handleSpecificGroup={handleSpecificGroup}
          key={group.id}
          id={group.id}
          name={group.name}
          description={group.description}
          category={group.category}
        />
      ))}
    </GroupsContainer>
  );
};
export default MyGroupsList;
