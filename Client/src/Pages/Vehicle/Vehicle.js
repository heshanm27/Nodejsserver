import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  roots: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function Vehicle() {
  const classes = useStyle();
  return (
    <div className={classes.roots} i>
      <Container color>
        <Pagination count={10} color="primary" />
      </Container>
    </div>
  );
}
