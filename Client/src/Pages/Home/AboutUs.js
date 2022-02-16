import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { useState } from "react";
import gear from "../../img/Icon/gear-solid.svg";
import screwDriver from "../../img/Icon/screwdriver-wrench-solid.svg";
import wrench from "../../img/Icon/wrench-solid.svg";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "50vh",
    justifyContent: "left",
  },
  boxCard: {
    width: "350px",
    height: "180px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginLeft: "35%",
    padding: "20px",

    width: "100px",
    height: "100px",
  },
}));

const AboutUs = () => {
  const [spacing, setSpacing] = useState(5);

  const classes = userStyle();
  return (
    <div className={classes.roots} id="review">
      <Container maxWidth="lg">
        <Container
          className={classes.container}
          pb={{ xs: 5, sm: 4 }}
          maxWidth="sm"
          style={{ marginTop: "150px", marginLeft: "10px" }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="left"
            style={{ fontFamily: "Staatliches", color: "#1FF072" }}
          >
            WHO WE ARE
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            align="left"
            style={{ fontFamily: "Staatliches" }}
          >
            WE HAVE 25 YEARS OF
          </Typography>
          <Typography
            component="h1"
            variant="h3"
            align="left"
            style={{ fontFamily: "Staatliches" }}
          >
            EXPERIENCE IN THIS FIELD
          </Typography>{" "}
          <Typography component="p" variant="body1" align="left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley ike
            Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Container>
        <Container
          max-width="sm"
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper
                className={classes.boxCard}
                elevation={4}
                style={{ fontFamily: "Staatliches", backgroundColor: "white" }}
              >
                <img src={screwDriver} className={classes.icon} />
                <Typography
                  component="h1"
                  variant="h6"
                  align="center"
                  style={{
                    marginTop: "30px",
                    color: "#212121",
                  }}
                >
                  {" "}
                  BEST TECHNICIANS
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                className={classes.boxCard}
                elevation={4}
                style={{ backgroundColor: "#0BB260" }}
              >
                <img src={gear} className={classes.icon} />
                <Typography
                  component="h1"
                  variant="h6"
                  align="center"
                  style={{
                    marginTop: "30px",
                    color: "white",
                  }}
                >
                  {" "}
                  QUALITY SERVICE
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper
                className={classes.boxCard}
                elevation={4}
                style={{ backgroundColor: "white" }}
              >
                <img src={wrench} className={classes.icon} />
                <Typography
                  component="h1"
                  variant="h6"
                  align="center"
                  style={{
                    marginTop: "30px",
                    backgroundColor: "white",
                    color: "#212121",
                  }}
                >
                  {" "}
                  AFFORDABLE PRICES
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default AboutUs;
