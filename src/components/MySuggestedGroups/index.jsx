import { useGroupList } from "../../Providers/GroupList";
import CardGroup from "../CardsGroupsPage/CardGroup";

const MySuggestedGroups = () => {
  const { group } = useGroupList();
  const shortGroup = group.slice(0, 4);
  return (
    <div style={{overflow: "scroll", height: "60%"}}>
      {shortGroup.map((group) => (
        <CardGroup 
                  key={group.id} 
                  name={group.name} 
                  description={group.description} 
                  category={group.category} />
      ))}
    </div>
  );
};
export default MySuggestedGroups;
