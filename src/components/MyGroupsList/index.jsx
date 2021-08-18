import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useMyGroupsList } from "../../Providers/MyGroupsList";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import CardGroup from "../CardsGroupsPage/CardGroup";

const MyGroupsList = () => {
  const { handleMyGroupsList, myGroups } = useMyGroupsList();
  const { handleSpecificGroup } = useSpecificGroup();

  useEffect(() => {
    handleMyGroupsList();
  }, [handleMyGroupsList]);

  return (
    <div>
      {myGroups.map((group) => (
        <CardGroup key={group.id} name={group.name} description={group.description} category={group.category} />
      ))}
    </div>
  );
};
export default MyGroupsList;
