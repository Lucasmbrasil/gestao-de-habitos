import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage, HorizontalLine } from "./styles";
import MenuSide from "../../components/MenuSide";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import MySpecificGroup from "../../components/MySpecificGroup";
import { PageContainer } from "../Dashboard/styles";
import { useMediaQuery } from "react-responsive";
import MenuFooter from "../../components/MenuFooter";
import MobileHeader from "../../components/MobileHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion"; 

const MyGroups = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const { specificGroup } = useSpecificGroup();

  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} />

      {specificGroup !== "" ? (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
        >
          <MySpecificGroup />
        </motion.div>
        
      ) : (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
        >
          <PageContainer>
            {desktop && <MenuSide />}
            {!desktop && <MobileHeader />}
            <BodyPage>
              <MyGroupsHeader />
              <HorizontalLine />
              <MyGroupsBody />
            </BodyPage>
            {!desktop && <MenuFooter />}
          </PageContainer>
          </motion.div>
        </>
      )}
    </>
  );
};

export default MyGroups;
