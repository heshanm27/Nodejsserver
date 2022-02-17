import { useRef } from "react";
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
import { useIntersection } from "react-use";
import bg from "../../img/Home/OurService.jpg";
import wrench from "../../img/Icon/Services/wrench-solid.svg";
import srcew from "../../img/Icon/Services/screwdriver-wrench-solid.svg";
import oil from "../../img/Icon/Services/oil-can-solid.svg";
import repair from "../../img/Icon/Services/car-wheel-svgrepo-com (2).svg";
import { TimelineLite } from "gsap/all";
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
    flexWrap: "wrap",
    marginTop: "150px",
    marginLeft: "100px",
    marginBottom: "150px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
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
    title: "Tehincal Repairs1",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: wrench,
  },
  {
    title: "Tehincal Repairs3",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: srcew,
  },
  {
    title: "Tehincal Repairs4",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: oil,
  },
  {
    title: "Tehincal Repairs5",
    discription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    url: repair,
  },
];

const achivements = [
  {
    id: 1,
    Title: "Our Technicain1",
    Count: 120,
    url: wrench,
  },
  {
    id: 2,
    Title: "OurTechnicai",
    Count: 120,
    url: wrench,
  },
  { id: 3, Title: "OurTech", Count: 120, url: wrench },
  { id: 4, Title: "OurT", Count: 120, url: wrench },
];

const OurService = () => {
  const classes = userStyle();
  const containerRef = useRef(null);
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const tl = new TimelineLite();
  const intersection = useIntersection(containerRef, {
    root: null,
    rootMargin: "10px",
    threshold: 0.6,
  });
  // Animation for fading in
  const fadeIn = (element) => {
    tl.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    tl.to(element, 1, {
      opacity: 0,
      y: 60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  intersection && intersection.intersectionRatio < 0.6
    ? fadeOut(".fadeService")
    : fadeIn(".fadeService");

  return (
    <div className={classes.mainroot}>
      <Container
        ref={containerRef}
        maxWidth="xl"
        className={classes.container}
        style={{}}
      >
        <Grid container spacing={3}>
          {Services.map((item) => {
            return (
              <Grid
                item
                key={item.title}
                xs={12}
                sm={6}
                className="fadeService"
              >
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
                      variant={reslution ? "h5" : "h3"}
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
        <Container maxWidth="lg">
          <Paper
            style={{
              width: "100%",
              height: "200px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container spacing={3}>
              {achivements.map((item) => {
                return (
                  <Grid item key={item.id} xs={12} sm={3}>
                    <Box
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Avatar src={item.url} />
                      <Typography>{item.Count}</Typography>
                      <Typography>{item.Title}</Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Paper>
        </Container>
      </Container>
    </div>
  );
};
//using props
export default OurService;
