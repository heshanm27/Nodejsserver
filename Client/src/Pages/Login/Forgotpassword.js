import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import RefreshIcon from "@material-ui/icons/Refresh";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import { useToast } from "@chakra-ui/react";
import Header from "../../component/Header";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    padding: "20px",
  },
  main: {
    backgroundColor: theme.palette.background.paper,
  },
  roots: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100vh",
  },
  link: {
    color: theme.palette.secondary.main,
  },
}));

export default function ForgotPassword() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const classes = useStyles();

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link to="/" className={classes.link}>
          RosCard.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // your login logic here
  };

  return (
    <div className={classes.roots} id="review">
      <Header />
      <div className={classes.main}>
        <Container component="main" maxWidth="sm" style={{ marginTop: "10%" }}>
          <Paper className={classes.paper}>
            <CssBaseline />
            <div className={classes.paper}>
              <center>
                <Avatar className={classes.avatar}>
                  <RefreshIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Reset Password
                </Typography>
              </center>
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => handleLogin(e)}
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                  color="secondary"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Reset
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/login" className={classes.link}>
                      <span style={{ display: "flex" }}>
                        <ArrowBackIcon /> Login
                      </span>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Paper>
        </Container>
      </div>
    </div>
  );
}
