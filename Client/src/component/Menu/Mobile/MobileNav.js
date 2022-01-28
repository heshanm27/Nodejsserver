import React, { useState } from "react";
import { useStyles } from "./MobileStyle";
import Drawer from "@material-ui/core/Drawer";
import {
  AppBar,
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
import NavListitem from "./MobileNavListitem";
import Mobileroutes from "./MobileRoute";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import Logo1 from "../../../img/logo512.png";
import Logo2 from "../../../img/logo192.png";
import clsx from "clsx";
import { useNavigate } from "react-router";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import logo from "../../../img/gm.png";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../../Redux/DarkmodeSlice";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";

function MobileNav() {
  const { darkModeSet } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { curruntUser, isAdmin } = useSelector((state) => state.user);
  const DashBord = {
    label: "Dashboard",
    path: "/dashbord",
    icon: <DashboardOutlinedIcon />,
    activeIcon: <DashboardIcon />,
    component: "Dashboard",
  };
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
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggelNavigation} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography align="center">RosCard.com</Typography>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <Drawer
        variant="temporary"
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
          {Mobileroutes.map((route, index) => {
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

          {isAdmin && (
            <NavListitem
              label={DashBord.label}
              activeIcon={DashBord.activeIcon}
              icon={DashBord.icon}
              path={DashBord.path}
              onClick={closeNavigation}
            />
          )}
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
          {curruntUser ? (
            <NavListitem
              label="LogIn"
              activeIcon={<MeetingRoomIcon />}
              icon={<MeetingRoomOutlinedIcon />}
              path="/login"
            />
          ) : (
            <NavListitem
              label="Log Out"
              activeIcon={<MeetingRoomIcon />}
              icon={<MeetingRoomOutlinedIcon />}
              path="logout"
            />
          )}
        </List>
      </Drawer>
    </div>
  );
}

export default MobileNav;
