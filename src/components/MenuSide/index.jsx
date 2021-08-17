import {  TitleBar, ListItemMenu, ListItemMenuGroup, LogoutDiv } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { cyan } from "@material-ui/core/colors";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: "Arvo",
  },

  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  list : {
    justifyContent: "flex-end"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: cyan[900],
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: cyan[900]
  },
 
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.secondary,
    padding: theme.spacing(3),
  },
}));

const MenuSide = () => {
  const classes = useStyles();
  const [appear, setAppear] = useState(false);
  const [showDiv, setShowDiv] = useState("notShow");

  const ShowGroups = () => {
    setAppear(!appear)
  };

  return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <TitleBar>procrastinare</TitleBar>
        <Divider />
        <List>    
            <ListItem button>
              <ListItemIcon><MenuIcon style={{color: "#ffffff"}} /></ListItemIcon>
              <ListItemMenu>dashboard</ListItemMenu>
            </ListItem>
            <ListItem button>
              <ListItemIcon><InsertEmoticonIcon style={{color: "#ffffff"}} /></ListItemIcon>
              <ListItemMenu>perfil</ListItemMenu>
            </ListItem> 
            <ListItem button>
              <ListItemIcon><LineStyleIcon style={{color: "#ffffff"}} /></ListItemIcon>
              <ListItemMenu>dashboard</ListItemMenu>
            </ListItem> 
            <ListItem button onClick={ShowGroups}>
              <ListItemIcon><GroupIcon style={{color: "#ffffff"}} /></ListItemIcon>
              <ListItemMenu>grupos</ListItemMenu>
              {
                appear === true ?
                <ExpandLessIcon style={{color: "#ffffff", marginLeft: "2rem"}} />
                : <ExpandMoreIcon style={{color: "#ffffff", marginLeft: "2rem"}} />
              }
            </ListItem>    
        </List>
        <Divider />
            {
              appear && 
              <List className={classes.list}>
                <ListItem button className={classes.list}>
                    <ListItemMenuGroup>meus grupos</ListItemMenuGroup>
                </ListItem>
                <ListItem button className={classes.list}>
                    <ListItemMenuGroup>encontrar grupos</ListItemMenuGroup>
                </ListItem>
                <ListItem button className={classes.list}>
                    <ListItemMenuGroup>criar novo grupo</ListItemMenuGroup>
                </ListItem>
              </List>
            }
        
        <LogoutDiv>
            <ListItem button >
              <ListItemIcon><ExitToAppIcon style={{color: "#ffffff"}} /></ListItemIcon>
              <ListItemMenu>logout</ListItemMenu>
            </ListItem> 
        </LogoutDiv>
      </Drawer>

  );
};

export default MenuSide;
