import { useState, useRef, useEffect } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  Paper,
  Avatar,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";
import bg from "../../img/Home/OurService.jpg";
import wrench from "../../img/Icon/Services/wrench-solid.svg";
import srcew from "../../img/Icon/Services/screwdriver-wrench-solid.svg";
import oil from "../../img/Icon/Services/oil-can-solid.svg";
import repair from "../../img/Icon/Services/car-wheel-svgrepo-com (2).svg";
import { TweenMax, TimelineLite, Power3 } from "gsap/all";
const userStyle = makeStyles((theme) => ({
  mainroot: {
    minHeight: "100vh",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    direction: "column",
    background: `rgba(0,0,0,0.7) url(${bg})`,
    backgroundRepeat: " no-repeat",
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
  typo: {
    color: "white",
  },
  IconCard: {
    width: "350px",
    height: "180px",
    display: "flex",
    alignItems: "center",
    marginLeft: "100xp",
  },
  avatar: {
    backgroundColor: "#0BB260",
    [theme.breakpoints.up("sm")]: {
      width: "75px",
      height: "75px",
    },
    width: "100px",
    height: "100px",
  },
  AvatarImg: {
    maxWidth: "50%",
    filter:
      "invert(99%) sepia(100%) saturate(2%) hue-rotate(18deg) brightness(104%) contrast(96%)",
  },
}));

const Services = [
  {
    title: "Tehincal Repairs",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: wrench,
  },
  {
    title: "Tehincal Repairs",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: srcew,
  },
  {
    title: "Tehincal Repairs",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: oil,
  },
  {
    title: "Tehincal Repairs",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: repair,
  },
];

const OurService = () => {
  const classes = userStyle();
  const refItems = useRef(null);
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const tl = new TimelineLite();

  // Animation for fading in
  const fadeOut = (element) => {
    tl.from(element, 2, {
      opacity: 0,
      y: 100,
      ease: "power4.out",
      stagger: {
        amount: 1.5,
      },
    });
  };

  useEffect(() => {
    console.log(refItems);
    // tl.from(refItems.current, 1.0, {
    //   opacity: 0,
    //   ease: Power3.easeIn,
    //   stagger: { amount: 0.3 },
    // });
    fadeOut(".fadeOut");
  }, []);

  return (
    <div className={classes.mainroot}>
      <Container
        maxWidth="xl"
        className={classes.container}
        style={{
          marginTop: "150px",
          marginLeft: "10px",
          marginBottom: "150px",
        }}
      >
        <Grid container spacing={3}>
          {Services.map((item) => {
            return (
              <Grid item key={item.title} xs={12} sm={6}>
                <Container
                  maxWidth="sm"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar className={classes.avatar}>
                    <img src={item.url} className={classes.AvatarImg} />
                  </Avatar>
                  <Box style={{ marginLeft: "20px" }}>
                    <Typography
                      component="h2"
                      variant={reslution ? "h4" : "h3"}
                      className={classes.typo}
                      align="justify"
                      style={{
                        marginBottom: "20px",
                        fontFamily: "Staatliches",
                      }}
                    >
                      {" "}
                      {item.title}
                    </Typography>
                    <Typography
                      component="p"
                      variant="body1"
                      className={classes.typo}
                      align="justify"
                    >
                      {item.discription}
                    </Typography>
                  </Box>
                </Container>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
//using props
export default OurService;
