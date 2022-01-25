import {
  AppBar,
  IconButton,
  Toolbar,
  Collapse,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Navlink from "../Context/Navlink";
import { useNavigate } from "react-router";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import { useSelector, useDispatch } from "react-redux";
import { changeDarkMode } from "../Redux/DarkmodeSlice";
import { logout } from "../Redux/userSlice";

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

const Header = () => {
  const { darkModeSet } = useSelector((state) => state.darkMode);
  const { curruntUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const classes = useStyles();

  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
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
          {/* <div>
            <img src={logo} width="10%" height="10%" />
          </div> */}
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
            <Navlink
              to="/dashbord"
              name="DashBord"
              color={darkModeSet ? "  Primary" : "rgba(0, 0, 0, 0.87)"}
            />
          )}
          {curruntUser && (
            <Navlink
              to="/logout"
              name="Logout"
              color={darkModeSet ? "Primary" : "rgba(0, 0, 0, 0.87)"}
              onClick={async (e) => {
                e.preventDefault();
                dispatch(logout());

                navigate("/");
              }}
            />
          )}
          <IconButton onClick={() => dispatch(changeDarkMode())}>
            {darkModeSet ? <NightsStayIcon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
