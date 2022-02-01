import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { useState } from "react";
import FrontCard from "../../component/Card";
import background from "../../img/wave.svg";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "60vh",
    backgroundImage: theme.palette.background.paper,
    backgroundSize: "cover",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    textAlign: "center",
  },
  container: {
    margin: "40px 0",
  },
  typo: {
    margin: "20px 0",
    color: purple[2],
  },
  card: {
    padding: "20px",
  },
  avatar: {
    marginLeft: "45%",
    marginBottom: "20px",
  },
  quote: {
    marginTop: "50px",
    lineHeight: "0.5",
  },
  quotebottom: {
    lineHeight: "0.5",
  },
}));

const LearMore = () => {
  const [spacing, setSpacing] = useState(5);

  const classes = userStyle();
  return (
    <div className={classes.roots} id="review">
      <Container className={classes.container} pb={{ xs: 5, sm: 4 }}>
        <Typography
          gutterBottom={true}
          variant="h4"
          component="h1"
          color="textPrimary"
          className={classes.typo}
        >
          Customer Review
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.card}>
              <Avatar alt="Remy Sharp" className={classes.avatar}>
                H
              </Avatar>
              <Typography
                variant="h2"
                align="left"
                className={classes.quotetop}
              >
                "
              </Typography>
              <Typography variant="body1" align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                ike Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <Typography
                variant="h2"
                align="right"
                className={classes.quotebottom}
              >
                "
              </Typography>
              <Typography variant="h7" align="left">
                Heshan Madhuranga
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.card}>
              <Avatar alt="Remy Sharp" className={classes.avatar}>
                H
              </Avatar>
              <Typography
                variant="h2"
                align="left"
                className={classes.quotetop}
              >
                "
              </Typography>
              <Typography variant="body1" align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                ike Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <Typography
                variant="h2"
                align="right"
                className={classes.quotebottom}
              >
                "
              </Typography>
              <Typography variant="h7" align="left">
                Heshan Madhuranga
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} className={classes.card}>
              <Avatar alt="Remy Sharp" className={classes.avatar}>
                H
              </Avatar>
              <Typography
                variant="h2"
                align="left"
                className={classes.quotetop}
              >
                "
              </Typography>
              <Typography variant="body1" align="justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                ike Aldus PageMaker including versions of Lorem Ipsum.
              </Typography>
              <Typography
                variant="h2"
                align="right"
                className={classes.quotebottom}
              >
                "
              </Typography>
              <Typography variant="h7" align="left">
                Heshan Madhuranga
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LearMore;
