import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage, HorizontalLine } from "./styles";
import MenuSide from "../../components/MenuSide";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import MySpecificGroup from "../../components/MySpecificGroup";
import { PageContainer, MainContainer } from "../Dashboard/styles"; 

const MyGroups = () => {
  const { specificGroup } = useSpecificGroup();

  return (
    <>
      {specificGroup !== "" ? (
        <>
          <MySpecificGroup />
        </>
      ) : (
        <>
        <PageContainer>
          <MenuSide />
          <BodyPage>
            <MyGroupsHeader />
            <HorizontalLine />
            <MyGroupsBody />
          </BodyPage>
        </PageContainer>
        </>
      )}
    </>
  );
};

export default MyGroups;
