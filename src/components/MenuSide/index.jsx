import { MenuBar, TitleBar, Container } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";

const MenuSide = () => {
  const [appear, setAppear] = useState("notAppear");
  const [showDiv, setShowDiv] = useState("notShow");

  const ShowGroups = () => {
    if (showDiv === "notShow") {
      setShowDiv("showDiv");
      if (appear === "notAppear") {
        setAppear("Appear");
      } else {
        setAppear("notAppear");
      }
    } else {
      setShowDiv("notShow");
      setAppear("notAppear");
    }
  };

  return (
    <>
      <Container>
        <TitleBar>
          <div className="title">Proscrastinare</div>
        </TitleBar>
        <MenuBar>
          <section className="pages">
            <div className="option">
              <MenuIcon />
              <div className="text">dashboard</div>
            </div>
            <div className="option">
              <InsertEmoticonIcon />
              <div className="text">perfil</div>
            </div>
            <div className="option">
              <LineStyleIcon />
              <div className="text">hábitos</div>
            </div>
            <div className="group" onClick={ShowGroups}>
              <GroupIcon />
              <div className="main-groups">grupos</div>
              <ExpandMoreIcon className="down-arrow" />
            </div>
            <div className={showDiv}>
              <div className={appear}>meus grupos</div>
              <div className={appear}>encontrar grupos</div>
              <div className={appear}>criar novo grupo</div>
            </div>
          </section>
          <div className="logout">
            <ExitToAppIcon />
            <div>logout</div>
          </div>
        </MenuBar>
      </Container>
    </>
  );
};

export default MenuSide;
