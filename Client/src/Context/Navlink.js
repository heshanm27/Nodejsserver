import React, { useEffect, useState } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  menuItemactive: {
    backgroundColor: theme.palette.divider,
  },
  menuItemNotactive: {
    backgroundColor: theme.palette.divider,
  },
}));

export default function Navlink({ to, name, ...rest }) {
  const [active, setActive] = useState(true);
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    setActive(location.pathname === to);
  }, [location]);

  return (
    <Link to={to}>
      <Button
        variant="text"
        margin="2"
        className={clsx(active && classes.menuItemactive)}
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}
