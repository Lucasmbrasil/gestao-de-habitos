import MySpecificGroup from "../../components/MySpecificGroup";
import SearchGroups from "../../components/SearchGroups";
import { useSpecificGroup } from "../../Providers/SpecificGroup";

const SearchGroup = () => {
  const { specificGroup } = useSpecificGroup();
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
