import { MenuBar, TitleBar } from "./styles";

import MenuIcon from "@material-ui/icons/Menu";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import LineStyleIcon from "@material-ui/icons/LineStyle";

import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import { useState } from "react";

const MenuSide = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
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
          <div className="option group-option">
            <GroupIcon />
            <div>
              <div
                className="event-group"
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Grupos
              </div>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>meus grupos</MenuItem>
                <MenuItem onClick={handleClose}>encontrar grupos</MenuItem>
                <MenuItem onClick={handleClose}>criar novo grupo</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="logout">
          <ExitToAppIcon />
          <div>logout</div>
        </div>
      </MenuBar>
    </>
  );
};

export default MenuSide;

/*<div>
        <Button
          aria-controls="fade-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open with fade transition
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>*/
