import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import Header from "../../component/Header";
import Footer from "../../Pages/Home/Footer";
import banner from "../../img/banner.jpeg";
import { Skeleton } from "@material-ui/lab";
import Notification from "../../component/Notification/Notification";
import usePagination from "../../component/Pagination/Pagination";
import VehicleTable from "../../component/Table/VehicleTable";
import {
  publicRequest,
  userRequest,
} from "../../axiosRequestMethod/defaultAxios";
const useStyle = makeStyles((theme) => ({
  roots: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  main: {
    [theme.breakpoints.down]: {
      height: "100vh",
    },
    height: "50vh",
    padding: "0",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  titleBOx: {
    marginTop: "15%",
  },
  cards: {
    marginTop: "10%",
  },
  media: {
    height: "180px",
  },
  Cardcontent: {
    justifyContent: "center",
    alignItems: "center",
    Height: "600px",
  },
  cardroot: {
    maxHeight: "600px",
    display: "block",
    transitionDuration: "0.3s",

    [theme.breakpoints.up("sm")]: {
      height: "45vw",
    },
  },
}));

export default function Vehicle() {
  const classes = useStyle();
  const [vehicles, setVehicls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  //pagination
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(0);
  const PER_PAGE = 10;

  const _DATA = usePagination(vehicles, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const data = await publicRequest.get("vehicle/all");

      if (data) {
        console.log(data.data);
        setVehicls(data.data);
        setIsLoading(false);
        setCount(Math.ceil(data.data.length / PER_PAGE));
      }
    } catch (err) {
      console.log(err.response);
      setNotify({
        isOpen: true,
        message: err.response.data.error,
        type: "error",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
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
          <Container component="main" maxWidth="lg">
            <Grid container spacing={3}>
              {isLoading &&
                [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                  return (
                    <Grid item key={item} xs={12} sm={6} md={4}>
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

              {!isLoading &&
                _DATA.currentData().map((item) => {
                  return (
                    <Grid item key={item._id} xs={12} sm={6} md={4}>
                      <Card className={classes.cardroot}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={item.img}
                            title={item.Model}
                          />
                          <CardContent className={classes.Cardcontent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {item.Brand} {item.Model}
                            </Typography>
                            <VehicleTable items={item} />
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button
                            size="small"
                            color="primary"
                            variant="outlined"
                          >
                            Share
                          </Button>
                          <Button size="small" color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Container>
        </Box>
        <Container
          maxWidth="md"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "0",
            height: "10vh",
          }}
        >
          <Pagination
            count={count}
            color="primary"
            page={page}
            onChange={handleChange}
          />
          <Notification notify={notify} setNotify={setNotify} />
        </Container>
      </div>
      <Footer />
    </>
  );
}
