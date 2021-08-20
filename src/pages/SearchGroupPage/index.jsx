import MySpecificGroup from "../../components/MySpecificGroup";
import SearchGroups from "../../components/SearchGroups";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import { motion } from "framer-motion"; 

const SearchGroup = () => {
  const { specificGroup } = useSpecificGroup();
  console.log(specificGroup);
  return (
    <div>
      <>
        {specificGroup !== "" ? (
          <>
            <MySpecificGroup />
          </>
        ) : (
          <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
          >
            <SearchGroups />
          </motion.div>
          </>
        )}
      </>
    </div>
  );
};
export default SearchGroup;
