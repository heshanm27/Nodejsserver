import { useState } from "react";
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
import Staatliches from "../../Assests/Fronts/Staatliches-Regular.ttf";
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
  button: {
    marginTop: "40px",
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
  const theme = useTheme();
  const reslution = useMediaQuery(theme.breakpoints.down("sm"));
  const tr = true;
  const direction = "";
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
              <Box>
                <Typography
                  component="h1"
                  variant={reslution ? "h4" : "h2"}
                  color="textPrimary"
                  style={{
                    margin: "5px 0",
                    fontFamily: "Staatliches",
                    fontSize: "88px",
                  }}
                >
                  WE ARE QUALIFIED &
                </Typography>
                <Typography
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
                    color="textPrimary"
                    style={{ fontSize: "1.2rem" }}
                    className={classes.typop}
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
                    className={classes.button}
                    endIcon={<KeyboardArrowDownIcon />}
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
