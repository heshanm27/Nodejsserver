import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Dashroutes from "./DashbordRoute";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Inboxicon from "@material-ui/icons/MoveToInbox";
import NavListitem from "./NavListitem";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function ListCollapse(props) {
  const { TitleIcon, TitleText, ListItems, onclicks } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{TitleIcon}</ListItemIcon>
        <ListItemText primary={TitleText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {ListItems.map((route, index) => {
            return (
              <NavListitem
                label={route.label}
                activeIcon={route.activeIcon}
                icon={route.icon}
                path={route.path}
                key={index}
                onClick={onclicks}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
}
export default ListCollapse;
