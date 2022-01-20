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
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const classes = useStyles();
  const [checked, setChecked] = useState(false);

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
          <Typography
            variant={reslution ? "h7" : "h6"}
            className={classes.title}
            color="textPrimary"
          >
            Rosacrd.com
          </Typography>
          {/* <div>
            <img src={logo} width="10%" height="10%" />
          </div> */}
          {!currentUser && (
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
          {currentUser && (
            <Navlink
              to="/dashbord"
              name="DashBord"
              color={darkModeSet ? "textPrimary" : "rgba(0, 0, 0, 0.87)"}
            />
          )}
          {currentUser && (
            <Navlink
              to="/logout"
              name="Logout"
              color={darkModeSet ? "Primary" : "rgba(0, 0, 0, 0.87)"}
              onClick={async (e) => {
                e.preventDefault();
                logout();
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
