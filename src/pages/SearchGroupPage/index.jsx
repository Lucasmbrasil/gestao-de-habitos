import MySpecificGroup from "../../components/MySpecificGroup";
import SearchGroups from "../../components/SearchGroups";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import { useHistory } from "react-router-dom";
const SearchGroup = () => {
  const { specificGroup } = useSpecificGroup();
  console.log(specificGroup);
  const history = useHistory();
  if (localStorage.length === 0) {
    history.push("/");
  }
  return (
    <div>
      <>
        {specificGroup !== "" ? (
          <>
            <MySpecificGroup />
          </>
        ) : (
          <>
            <SearchGroups />
          </>
        )}
      </>
    </div>
  );
};
export default SearchGroup;
