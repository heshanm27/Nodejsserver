import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import { useToast } from "@chakra-ui/react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { login } from "../../Redux/userApi";
import { useSelector, useDispatch } from "react-redux";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        RosCard.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
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
    marginTop: "50px",
    padding: "20px",
  },
  textField: {
    width: "100%",
  },
  main: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100vh",
    marginTop: "-50px",
  },
  conatiner: {},
}));

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { curruntUser, test } = useSelector((state) => state.user);
  const classes = useStyles();
  // const { login } = useAuth();

  //redux
  const dispatch = useDispatch();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validate = () => {
    let temp = {};

    temp.Email =
      (/$^|.+@.+..+/.test(email) ? "" : "Email is Not Valid") ||
      (email ? "" : "This Field is Required");
    temp.Password = password ? "" : "This Field is Required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    //  login logic here

    /*  if (validate()) {
      console.log(validate());
      login(email, password)
        .then((res) => navigate("/dashbord"))
        .catch((e) => {
          toast({
            description: "Email Or PassWord Invalid",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        })
        .finally(() => setIsSubmitting(false));
    }*/

    login(dispatch, { email, password });
  };

  return (
    <div className={classes.main}>
      <Container component="main" maxWidth="sm" className={classes.conatiner}>
        <Paper className={classes.paper}>
          <CssBaseline />
          <div className={classes.paper}>
            <center>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
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
                error={errors.Email ? true : false}
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
                helperText={errors.Email}
                color="secondary"
              />
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                color="secondary"
                variant="outlined"
              >
                <InputLabel htmlFor="password">Password</InputLabel>
                <OutlinedInput
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  color="secondary"
                  error={errors.Password ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
                {errors.Password && (
                  <FormHelperText error={true}>Enter Password</FormHelperText>
                )}
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="secondary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="forgotpassword" variant="body2" color="secondary">
                    Forgot password?
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
  );
}
