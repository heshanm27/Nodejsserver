import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import DesktopMenu from "./Menu/DesktopMenu";
import MobileNav from "./Menu/Mobile/MobileNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.root}>
      {reslution && <MobileNav />}
      {!reslution && <DesktopMenu />}
    </div>
  );
};

export default Header;
