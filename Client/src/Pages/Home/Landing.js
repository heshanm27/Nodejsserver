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
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";
import bg from "../../img/bg.jpg";
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
  box: {
    margin: "auto 0",
    marginleft: "200px",
    minHeight: "250px",
    maxWidth: "800px",
    minWidth: "250px",
    textAlign: "center",
  },
  paper: {
    padding: "40px",
    margin: "40px",
  },
  typo: {
    fontSize: "1.4rem",
    Width: "50%",

    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "30px",
    },
    typop: {
      color: "#ffffff",
    },
  },
  wave: {
    width: "100%",
  },
}));

const Landing = () => {
  const classes = userStyle();
  const refItems = useRef(null);
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const tl = new TimelineLite();

  // Animation for fading in
  const fadeIn = (element) => {
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
    fadeIn(".fadeIn");
  }, []);

  return (
    <div className={classes.mainroot}>
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={12}>
            <Container className={classes.box} maxWidth="sm">
              <Box style={{ marginBottom: "150px", marginTop: "150px" }}>
                <Typography
                  ref={refItems}
                  className="fadeIn"
                  component="h1"
                  variant={reslution ? "h4" : "h2"}
                  style={{
                    margin: "5px 0",
                    fontFamily: "Staatliches",
                    fontSize: "88px",
                    color: "white",
                  }}
                >
                  WE ARE QUALIFIED &
                </Typography>
                <Typography
                  ref={refItems}
                  className="fadeIn"
                  component="h1"
                  variant={reslution ? "h4" : "h2"}
                  style={{
                    margin: "5px 0",
                    fontFamily: "Staatliches",
                    color: "#1FF072",
                  }}
                >
                  PROFESSIONAL
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    component="p"
                    align="center"
                    style={{
                      fontSize: "1.2rem",
                      color: "white",
                      wordSpacing: "5px",
                    }}
                    className={classes.typop}
                    ref={refItems}
                    className="fadeIn"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley ike Aldus PageMaker including versions
                    of Lorem Ipsum.industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley ike Aldus
                    PageMaker including versions of Lorem
                  </Typography>
                </Box>
                <Scroll
                  to="review"
                  smooth={true}
                  duration={500}
                  delay={250}
                  isDynamic={true}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    className="fadeIn"
                    endIcon={<KeyboardArrowDownIcon />}
                    style={{
                      marginTop: "40px",
                    }}
                    ref={refItems}
                  >
                    Learn More
                  </Button>
                </Scroll>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
//using props
export default Landing;
