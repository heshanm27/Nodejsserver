import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import Navlink from "../../Context/Navlink";
import { useNavigate } from "react-router-dom";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../../Redux/DarkmodeSlice";
import { logout } from "../../Redux/userSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "auto 0",
  },
  appbar: {
    color: "White",
  },
}));

export default function DesktopMenu() {
  const { darkModeSet } = useSelector((state) => state.darkMode);
  const { curruntUser, isAdmin } = useSelector((state) => state.user);

  const [anchor, setAnchor] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useStyles();

  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = (path) => {
    if (path === "logout") {
      dispatch(logout());
      setAnchor(false);
    } else {
      navigate(path);
      setAnchor(false);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appbar}
        color="inherit"
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.title}>
            {" "}
            <Typography variant={reslution ? "h7" : "h6"} color="textPrimary">
              Rosacrd.com
            </Typography>
          </Link>
          <Navlink
            to="/store"
            name="Vehicles"
            color={darkModeSet ? "  Primary" : "rgba(0, 0, 0, 0.87)"}
          />
          {!curruntUser && (
            <Link to="/login">
              {" "}
              <Button
                variant="contained"
                endIcon={<ExitToAppIcon />}
                color="primary"
              >
                Login
              </Button>
            </Link>
          )}

          {curruntUser && (
            <IconButton aria-label="delete" onClick={handleClick}>
              <Avatar
                alt="Remy Sharp"
                src="https://firebasestorage.googleapis.com/v0/b/socialtest-cef88.appspot.com/o/Defaultimg%2Fundraw_Images_re_0kll.png?alt=media&token=ee57b9d5-fa04-4d85-8ac0-bd2cb8d04fb0"
              />
            </IconButton>
          )}

          <Menu
            id="simple-menu"
            anchorEl={anchor}
            keepMounted
            open={anchor}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose("dashbord")}>
              My account
            </MenuItem>
            {isAdmin && (
              <MenuItem onClick={() => handleClose("./dashbord")}>
                DashBord
              </MenuItem>
            )}
            <MenuItem onClick={() => handleClose("logout")}>Logout</MenuItem>
          </Menu>

          <IconButton onClick={() => dispatch(changeDarkMode())}>
            {darkModeSet ? <NightsStayIcon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
