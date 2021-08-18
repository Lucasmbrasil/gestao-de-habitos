import { useGroupList } from "../../Providers/GroupList";

const MySuggestedGroups = () => {
  const { group } = useGroupList();
  const shortGroup = group.slice(0, 4);
  return (
    <div>
      {shortGroup.map((group) => (
        <div key={group.id} style={{ margin: "20px" }}>
          <div>{group.name}</div>
          <div>{group.description}</div>
        </div>
      ))}
    </div>
  );
};
export default MySuggestedGroups;
