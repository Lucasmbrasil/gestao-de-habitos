import MenuSide from "../../components/MenuSide";
import { PageContainer, MainContainer } from "../Dashboard/styles";
import {
  ButtonAddGroup,
  ContainerHeader,
  ContainerIconTitleSubtitle,
} from "./styles";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useMediaQuery } from "react-responsive";
import MenuFooter from "../../components/MenuFooter";
import MobileHeader from "../../components/MobileHeader";
import SearchGroup from "../SearchGroupPage";
import { useState } from "react";
import ModalGroup from "../../components/ModalContainer/ModalGroup";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import MySpecificGroup from "../../components/MySpecificGroup";

const FindGroups = () => {
  const { specificGroup } = useSpecificGroup();
  const [createGroup, setCreateGroup] = useState(false);
  const handleButtonClose = () => {
    setCreateGroup(false);
  };

  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  if(specificGroup !== ""){
    return (
      <MySpecificGroup />
    )
  }
  return (
    <PageContainer>
      {desktop && <MenuSide />}
      {!desktop && <MobileHeader />}
      <MainContainer>
        <ContainerHeader>
          <ContainerIconTitleSubtitle>
            <PeopleOutlineIcon fontSize="large" style={{ color: "#F57F17" }} />
            <div>
              <h2>encontre novos grupos</h2>
              <p>
                pesquise pelo nome ou categoria que você mais se identifica!
              </p>
            </div>
          </ContainerIconTitleSubtitle>

          <ButtonAddGroup onClick={() => setCreateGroup(true)}>
            <AddCircleOutlineIcon fontSize="small" /> criar novo grupo
          </ButtonAddGroup>
          {createGroup && (
            <ModalGroup
              handleButtonClose={handleButtonClose}
              setCreateGroup={setCreateGroup}
            />
          )}
        </ContainerHeader>
        <SearchGroup />
      </MainContainer>
      {!desktop && <MenuFooter />}
    </PageContainer>
  );
};

export default FindGroups;
