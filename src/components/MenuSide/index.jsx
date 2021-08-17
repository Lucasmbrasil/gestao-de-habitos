import { MenuBar, TitleBar, ContainerPai } from "./styles";

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
      <ContainerPai>
        <TitleBar>
          <div className="title">Proscrastinare</div>
        </TitleBar>
        <MenuBar>
          <div className="pages">
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
            <div className="group">
              <GroupIcon />
              <div
                className="main-groups"
                onClick={() => {
                  ShowGroups();
                }}
              >
                Grupos
              </div>
              <ExpandMoreIcon
                className="down-arrow"
                onClick={() => {
                  ShowGroups();
                }}
              />
            </div>
            <div className={showDiv}>
              <div className={appear}>meus grupos</div>
              <div className={appear}>encontrar grupos</div>
              <div className={appear}>criar novo grupo</div>
            </div>
          </div>
          <div className="logout">
            <ExitToAppIcon />
            <div>logout</div>
          </div>
        </MenuBar>
      </ContainerPai>
    </>
  );
};

export default MenuSide;
