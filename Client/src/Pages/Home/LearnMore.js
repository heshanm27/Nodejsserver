import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { useState } from "react";
import FrontCard from "../../component/Card";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "60vh",
    backgroundColor: theme.palette.background.paper,
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
          <FrontCard />
        </Grid>
      </Container>
    </div>
  );
};

export default LearMore;
