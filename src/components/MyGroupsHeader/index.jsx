import {
  ButtonAddGroup,
  ContainerHeader,
  ContainerIconTitleSubtitle,
} from "./styles";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ModalGroup from "../ModalContainer/ModalGroup";
import { useState } from "react";

const MyGroupsHeader = () => {
  const [createGroup, setCreateGroup] = useState(false);

  const handleButtonClose = () => {
    setCreateGroup(false);
  };
  return (
    <>
      <ContainerHeader>
        <ContainerIconTitleSubtitle>
          <PeopleOutlineIcon fontSize="large" style={{ color: "#F57F17" }} />
          <div>
            <h2>grupos</h2>
            <p>veja abaixo os grupos em que você se inscreveu</p>
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
    </>
  );
};

export default MyGroupsHeader;
