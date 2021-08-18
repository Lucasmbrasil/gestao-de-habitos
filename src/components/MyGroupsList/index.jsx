import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useMyGroupsList } from "../../Providers/MyGroupsList";
import { useSpecificGroup } from "../../Providers/SpecificGroup";

const MyGroupsList = () => {
  const { handleMyGroupsList, myGroups } = useMyGroupsList();
  const { handleSpecificGroup } = useSpecificGroup();

  useEffect(() => {
    handleMyGroupsList();
  }, [handleMyGroupsList]);

  return (
    <div>
      {myGroups.map((group) => (
        <div
          key={group.id}
          style={{ margin: "20px", cursor: "pointer" }}
          onClick={() => handleSpecificGroup(group.id)}
        >
          <div>{group.name}</div>
          <div> {group.description}</div>
        </div>
      ))}
    </div>
  );
};
export default MyGroupsList;
