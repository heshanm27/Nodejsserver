import React, { useState } from "react";
import { useStyles } from "./DrawerStyle";
import Drawer from "@material-ui/core/Drawer";
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import NavListitem from "./NavListitem";
import Dashroutes from "./DashbordRoute";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import Logo1 from "../../img/logo512.png";
import Logo2 from "../../img/logo192.png";
import clsx from "clsx";
import { Outlet, useNavigate } from "react-router";
import { ListIcon } from "@chakra-ui/react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import logo from "../../img/gm.png";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../Redux/DarkmodeSlice";

function DashBordDarwer() {
  const { darkModeSet } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const toggelNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    //if resultion match only drawer auto lose when clik button
    if (reslution) {
      setOpen(false);
    }
  };
  return (
    <div className={classes.rootse}>
      {reslution && (
        <AppBar>
          <Toolbar>
            <IconButton onClick={toggelNavigation} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography>RosCard.com</Typography>
          </Toolbar>
        </AppBar>
      )}
      <CssBaseline />
      <Drawer
        variant={reslution ? "temporary" : "permanent"}
        open={open}
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDawercollapse
          ),
        }}
        anchor="left"
      >
        <div
          className={clsx(
            classes.navigationtoolBar,
            !open && classes.navigationtoolbarCollaps
          )}
        >
          <IconButton
            onClick={() => {
              toggelNavigation();
            }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.navigationLogoContainer}>
          <img
            src={open ? logo : Logo2}
            alt="logo"
            className={classes.navgivationLogo}
            loading="lazy"
          />
        </div>
        <List className={classes.navigationList}>
          {Dashroutes.map((route, index) => {
            return (
              <NavListitem
                label={route.label}
                activeIcon={route.activeIcon}
                icon={route.icon}
                path={route.path}
                onClick={closeNavigation}
                key={index}
              />
            );
          })}
          <ListItem
            button
            label={darkModeSet ? "DarkMode" : "LightMode"}
            key={6}
            className={classes.menuitem}
            onClick={() => dispatch(changeDarkMode())}
          >
            <ListItemIcon>
              {darkModeSet ? <NightsStayIcon /> : <Brightness7Icon />}
            </ListItemIcon>
            <ListItemText
              primary={darkModeSet ? "LightMode" : "DarkMode"}
              primaryTypographyProps={{ varient: "body2" }}
            />
          </ListItem>
          <div className={classes.navigationSpacer}></div>
          <NavListitem
            label="Log Out"
            activeIcon={<MeetingRoomIcon />}
            icon={<MeetingRoomOutlinedIcon />}
            path="logout"
          />
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={open ? classes.shiftTextRight : classes.shiftTextLeft}>
          <div className={classes.toolbar}></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBordDarwer;
