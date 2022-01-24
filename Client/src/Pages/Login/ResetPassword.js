import React, { useState } from "react";
import { Link } from "react-router-dom";
import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from "@material-ui/core/styles";
import { useToast } from "@chakra-ui/react";
import Header from "../../component/Header";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Paper,
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  Button,
  CssBaseline,
} from "@material-ui/core";
import PasswordInput from "../../component/Inputs/PasswordInput";

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

export default function ResetPassword() {
  const toast = useToast();
  const [errors, setErrors] = useState({});
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
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

  const validate = () => {
    let temp = {};
    if (password) {
      console.log("true");
    } else {
      console.log("false");
    }
    temp.Password = password ? "" : "This Field is Required";

    if (confrimPassword != "") {
      if (password !== confrimPassword && password != "") {
        temp.confrimPassword = "Password and confrim password doesnt match";
      }
    } else {
      temp.confrimPassword = confrimPassword ? "" : "This Field is Required";
    }

    setErrors({
      ...temp,
    });
    console.log(temp);
    return Object.values(temp).every((x) => x == "");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // your login logic here

    if (validate()) {
    }
  };

  const hadnlePassword = (e) => {
    setPassword(e.target.value);
  };

  const hadnleConfrimPassword = (e) => {
    setConfirmPassword(e.target.value);
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
                <PasswordInput
                  label="Password"
                  value={password}
                  setvalue={hadnlePassword}
                  error={errors.Password}
                />
                <PasswordInput
                  label="Confrim Password"
                  value={confrimPassword}
                  setvalue={hadnleConfrimPassword}
                  error={errors.confrimPassword}
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
