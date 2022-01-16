import React from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export default function Navlink({ to, name, ...rest }) {
  const location = useLocation();

  return (
    <Link to={to}>
      <Button as="a" variant="outlined" margin="2" {...rest}>
        {name}
      </Button>
    </Link>
  );
}
