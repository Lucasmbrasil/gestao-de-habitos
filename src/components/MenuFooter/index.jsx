import { Footer } from "./styles";

import MenuIcon from "@material-ui/icons/Menu";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { withStyles } from "@material-ui/core/styles";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useState } from "react";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid black",
    backgroundColor: "#006064",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#FDD835",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "red",
      },
    },
  },
}))(MenuItem);

const MenuFooter = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Footer>
        <MenuIcon className="icons" />
        <SentimentVerySatisfiedIcon className="icons" />
        <LineStyleIcon className="icons" />
        <div>
          <GroupIcon className="icons" onClick={handleClick} />

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={handleClose}>Meus Grupos</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>encontrar</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>criar grupo</StyledMenuItem>
          </StyledMenu>
        </div>
        <ExitToAppIcon className="icons" />
      </Footer>
    </>
  );
};

export default MenuFooter;
