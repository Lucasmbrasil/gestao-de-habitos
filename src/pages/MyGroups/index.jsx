import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage, HorizontalLine } from "./styles";
// import MenuSide from "../../components/MenuSide";

const MyGroups = () => {
  return (
    <>
      {/* <MenuSide /> */}
      <BodyPage>
        <MyGroupsHeader />
        <HorizontalLine />
        <MyGroupsBody />
      </BodyPage>
    </>
  );
};

export default MyGroups;
