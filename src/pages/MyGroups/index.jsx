import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage, HorizontalLine } from "./styles";
import MenuSide from "../../components/MenuSide";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import MySpecificGroup from "../../components/MySpecificGroup";
const MyGroups = () => {
  const { specificGroup } = useSpecificGroup();

  return (
    <>
      {specificGroup !== "" ? (
        <MySpecificGroup />
      ) : (
        <>
          <MenuSide />
          <BodyPage>
            <MyGroupsHeader />
            <HorizontalLine />
            <MyGroupsBody />
          </BodyPage>
        </>
      )}
    </>
  );
};

export default MyGroups;
