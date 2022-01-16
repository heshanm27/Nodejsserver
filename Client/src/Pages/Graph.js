import {
  Button as btn,
  Container,
  makeStyles,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core";
import React, { useRef } from "react";
import BarChart from "../component/Chart/Barchart";
import LineChart from "../component/Chart/LineChart";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    textAlign: "center",
  },

  paper: {
    [theme.breakpoints.up("sm")]: {
      padding: "20px",
    },
    marginTop: "20px",
    height: "auto",
  },
}));

const Graph = () => {
  const classes = userStyle();

  return (
    <div className={classes.roots} id="review">
      <Grid container>
        <Grid item xs={12} sm={6}>
          {" "}
          <Container component="main" maxWidth="sm" className={classes.main}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Item
              </Typography>
              <Paper className={classes.paper}>
                <BarChart />
              </Paper>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container component="main" maxWidth="lg" className={classes.main}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5" color="textPrimary">
                DashBord
              </Typography>
              <Paper className={classes.paper}>
                {" "}
                <BarChart />
              </Paper>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Container component="main" maxWidth="lg" className={classes.main}>
            <div className={classes.paper}>
              <Paper className={classes.paper}>
                {" "}
                <LineChart />
              </Paper>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Graph;
