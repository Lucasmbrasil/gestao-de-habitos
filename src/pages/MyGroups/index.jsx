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
import { useHistory } from "react-router-dom";
const MyGroups = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const { specificGroup } = useSpecificGroup();

  const history = useHistory();
  if (localStorage.length === 0) {
    history.push("/");
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} />

      {specificGroup !== "" ? (
        <>
          <MySpecificGroup />
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};

export default MyGroups;
