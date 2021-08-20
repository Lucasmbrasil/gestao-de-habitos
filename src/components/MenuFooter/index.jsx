import { Footer } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid black",
    backgroundColor: "#006064",
    color: "#ffffff",
    fontFamily: "Arvo",
    fontWeight: "bold",
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
    fontWeight: "bold",
    "&:focus": {
      backgroundColor: "#044547",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "red",
      },
    },
  },
}))(MenuItem);

const MenuFooter = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();
  const Logout = () => {
    history.push("/");
    localStorage.clear();
  };

  const DashboardFunction = () => {
    history.push("/dashboard");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Footer>
        <MenuIcon className="icons" onClick={DashboardFunction} />
        <div>
          <GroupIcon className="icons" onClick={handleClick} />

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem
              onClick={() => {
                handleClose();
                history.push("/groups/mygroups");
              }}
            >
              meus grupos
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                handleClose();
                history.push("/groups/find");
              }}
            >
              encontrar novos grupos
            </StyledMenuItem>
          </StyledMenu>
        </div>
        <InfoIcon className="icons" onClick={() => {
                handleClose();
                history.push("/contact");
              }} />
        <ExitToAppIcon className="icons" onClick={Logout} />
      </Footer>
    </>
  );
};

export default MenuFooter;
