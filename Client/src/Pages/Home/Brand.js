import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import AvatrFetch from "../../fetch/Avatar";
import getData from "../../fetch/Avatar";

const useStyles = makeStyles((theme) => ({
  root2: {
    backgroundColor: theme.palette.background.paper,
  },
  brandcontainer: {
    justifyContent: "center",
  },
}));

const Brand = () => {
  const classes = useStyles();
  return (
    <div
      id="brand"
      className={classes.root2}
      style={{
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Container style={{ marginTop: "50px" }}>
        <Typography
          align="center"
          style={{ marginBottom: "50px" }}
          variant="h4"
          color="textPrimary"
          component="h5"
        >
          Trusted Brand
        </Typography>
        <Grid
          container
          spacing={3}
          style={{ marginBottom: "50px", justifyContent: "center" }}
        >
          <AvatrFetch />
        </Grid>
      </Container>
    </div>
  );
};
export default Brand;
