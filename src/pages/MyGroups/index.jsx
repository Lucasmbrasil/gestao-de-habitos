import MyGroupsHeader from "../../components/MyGroupsHeader";
import MyGroupsBody from "../../components/MyGroupsBody";
import { BodyPage, HorizontalLine } from "./styles";
import MenuSide from "../../components/MenuSide";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import MySpecificGroup from "../../components/MySpecificGroup";
import { PageContainer } from "../Dashboard/styles"; 
import { useMediaQuery } from 'react-responsive'; 
import MenuFooter from "../../components/MenuFooter";
import MobileHeader from "../../components/MobileHeader";

const MyGroups = () => {
  const desktop = useMediaQuery({ query: '(min-width: 769px)' })
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
