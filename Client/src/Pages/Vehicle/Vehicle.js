import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import Header from "../../component/Header";
import Footer from "../../Pages/Home/Footer";
import banner from "../../img/banner.webp";
import { Skeleton } from "@material-ui/lab";
const useStyle = makeStyles((theme) => ({
  roots: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    marginTop: theme.mixins.toolbar,
  },
  main: {
    height: "50vh",
    margin: "0",
    padding: "0",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  titleBOx: {
    marginTop: "20%",
  },
  cards: {
    marginTop: "10%",
  },
}));

export default function Vehicle() {
  const classes = useStyle();
  return (
    <>
      <Header />

      <div className={classes.roots}>
        <div className={classes.main}>
          <img src={banner} width="100%" height="100%" />
        </div>

        <Box className={classes.titleBOx}>
          <Container component="main" maxWidth="md" className={classes.title}>
            {" "}
            <div>
              <Typography variant="h5" gutterBottom={true} color="textPrimary">
                UNITED AUTOMART
              </Typography>
              <Typography variant="body1" color="textPrimary">
                When it comes to the ever-evolving needs of our customers,
                selling your existing vehicle and buying a vehicle is part of
                your changing lifestyle, and we’ve got the perfect solution for
                you. Say goodbye to the hassle of placing ads, entertaining
                multiple buyers and hours of negotiating! Introducing our unique
                Trade-In offer! Simply drive-in and let us provide a valuation
                for your current vehicle, and choose your new ride from a range
                of high-performance brands.
              </Typography>
              <br />{" "}
              <Typography variant="body1" color="textPrimary">
                {" "}
                those looking for a good deal on a used car, our professional
                and comprehensive valuations guarantee good condition and
                genuine mileage for a second hand option.
              </Typography>
            </div>
          </Container>
        </Box>
        <Box className={classes.cards}>
          <Container component="main" maxWidth="md">
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                  <Grid key={item} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        marginBottom: "20px",
                        padding: "20px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Skeleton variant="rect" width={280} height={118} />
                      <Skeleton width="60%" />
                      <Skeleton width="60%" />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>

        <Pagination count={2} color="primary" />
      </div>
      <Footer />
    </>
  );
}
