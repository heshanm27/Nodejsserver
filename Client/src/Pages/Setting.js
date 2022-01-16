import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
  TextField,
  CssBaseline,
  CircularProgress,
  Badge,
  Avatar,
  IconButton,
  Box,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { purple } from "@material-ui/core/colors";
import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { db, storage } from "../init/firebaseinit";
import { useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import Notification from "../component/Notification/Notification";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const userStyle = makeStyles((theme) => ({
  roots: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
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
  paper: {
    padding: "10px",
    [theme.breakpoints.up("sm")]: {
      padding: "40px",
    },
    marginTop: "50px",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginTop: "-50px",
    outline: ` solid 2px ${theme.palette.text.primary}`,
  },
  iconbtn: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
    background: theme.palette.background.paper,

    "&:hover": {
      background: theme.palette.background.paper,
    },
  },
  profileimg: {
    marginTop: "-20px",
  },
  Grid: {
    marginTop: "50px",
  },
  inputs: {
    display: "none",
  },
  textField: {
    width: "100%",
  },
  curruntpassword: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: "0",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      marginLeft: "-50%",
    },
  },
}));

const Setting = () => {
  const navigate = useNavigate();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const classes = userStyle();
  //const { currentUser } = useAuth();
  const auth = getAuth();

  const user = auth.currentUser;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [photoUrl, setPhotoUrl] = useState("");
  const [userName, setUserName] = useState(currentUser.displayName);
  const [userNameDiable, setuserNameDisable] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [image, setImage] = useState([]);
  const [profileImg, setprofileImg] = useState(currentUser.photoURL);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [diablebtn, setDisableBtn] = useState(true);
  const [error, setError] = useState(false);
  const [confirmpwerror, setConfirmPwError] = useState(false);
  const [curruntPassword, setCurruntPassword] = useState("");
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const ImagePreview = (e) => {
    setImage([]);
    const image = document.getElementById("handleImage");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setprofileImg(reader.result);
        console.log(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);

    for (let i = 0; i < e.target.files.length; i++) {
      setImage((prevState) => [...prevState, e.target.files[i]]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const promises = [];
    if (image.length != 0) {
      const storageRef = ref(storage, `ProfileImg/${image[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, image[0]);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (e) => {
          setNotify({
            isOpen: true,
            message: "Error Occur When Uploading Image",
            type: "error",
          });
          setIsLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateProfile(auth.currentUser, {
              displayName: userName,
              photoURL: downloadURL,
            })
              .then(() => {
                setNotify({
                  isOpen: true,
                  message: "Successfully Updated",
                  type: "success",
                });
                setIsLoading(false);
              })
              .catch((e) => {
                setNotify({
                  isOpen: true,
                  message: e.message,
                  type: "error",
                });
                setIsLoading(false);
              });
          });
        }
      );
    } else {
      console.log("currunt user img", currentUser.photoURL);
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setDisableBtn(true);
    setError(false);
    setConfirmPwError(false);
    if (password === e.target.value && password.length != 0) {
      if (password.length < 6) {
        setError(true);
        setDisableBtn(true);
        return;
      }
      setDisableBtn(false);
    } else {
      setConfirmPwError(true);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setDisableBtn(true);
    setError(false);
    if (confirmPassword === e.target.value && password.length != 0) {
      if (password.length < 6) {
        setError(true);
        setDisableBtn(true);
        return;
      }
      setDisableBtn(false);
    }
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    reauthenticateWithCredential(
      user,
      EmailAuthProvider.credential(user.email, curruntPassword)
    )
      .then(() => {
        console.log("after authprovider");
        updatePassword(user, password)
          .then(() => {
            setPassword("");
            setConfirmPassword("");
            setCurruntPassword("");
            setNotify({
              isOpen: true,
              message: "Successfully Updated",
              type: "success",
            });
          })
          .catch((e) => {
            console.log(e);
            setNotify({
              isOpen: true,
              message: e.message,
              type: "error",
            });
          });
      })
      .catch((error) => {
        console.log(error.message);
        setNotify({
          isOpen: true,
          message: "Currunt PassWord Invalid",
          type: "error",
        });
      });
  };
  useEffect(() => {
    console.log("curruntuser", currentUser);
  }, [currentUser]);

  return (
    <div className={classes.roots} id="review">
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            color="textPrimary"
            style={{ marginBottom: "80px" }}
          >
            Profile Settings
          </Typography>
          <Paper className={classes.paper}>
            <form autocomplete="off" onSubmit={(e) => handleSubmit(e)}>
              <center>
                <div className={classes.profileimg}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    badgeContent={
                      <div>
                        {" "}
                        <input
                          accept="image/*"
                          className={classes.inputs}
                          id="contained-button-file"
                          type="file"
                          onChange={(e) => ImagePreview(e)}
                        />
                        <label htmlFor="contained-button-file">
                          <IconButton
                            className={classes.iconbtn}
                            component="span"
                          >
                            {" "}
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </div>
                    }
                  >
                    <Avatar
                      alt="Travis Howard"
                      src={profileImg}
                      className={classes.large}
                    />
                  </Badge>
                </div>
              </center>
              <Grid container spacing={2} className={classes.Grid}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box style={{ display: "flex" }}>
                    <TextField
                      disabled={userNameDiable}
                      id="outlined-basic"
                      label="User Name"
                      variant="outlined"
                      defaultValue={currentUser.displayName}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      fullWidth
                    />
                    <IconButton
                      onClick={() => setuserNameDisable(!userNameDiable)}
                    >
                      {userNameDiable ? <EditIcon /> : <ClearIcon />}
                    </IconButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Box style={{ display: "flex" }}>
                    <TextField
                      disabled
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      defaultValue={currentUser.email}
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  {isLoading ? (
                    <CircularProgress variant="determinate" value={progress} />
                  ) : (
                    <Button variant="contained" color="primary" type="submit">
                      Update
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
            <Grid container>
              <Grid item xs={12}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Update PassWord
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <form
                      autocomplete="off"
                      style={{ width: "100%" }}
                      onSubmit={handleUpdatePassword}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <FormControl
                            color="secondary"
                            variant="outlined"
                            className={classes.curruntpassword}
                          >
                            <InputLabel htmlFor="password">
                              Currunt Password
                            </InputLabel>
                            <OutlinedInput
                              fullWidth
                              required
                              name="password"
                              type={showPassword ? "text" : "password"}
                              id="password"
                              value={curruntPassword}
                              autoComplete="current-password"
                              onChange={(e) =>
                                setCurruntPassword(e.target.value)
                              }
                              color="secondary"
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              labelWidth={70}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl
                            color="secondary"
                            variant="outlined"
                            className={classes.textField}
                          >
                            <InputLabel htmlFor="password">
                              New Password
                            </InputLabel>
                            <OutlinedInput
                              fullWidth
                              required
                              name="New password"
                              type={showPassword ? "text" : "password"}
                              id="New password"
                              value={password}
                              autoComplete="New password"
                              onChange={handlePassword}
                              color="secondary"
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              labelWidth={70}
                            />
                            {error && (
                              <FormHelperText error={true}>
                                Password length must be greater than 6
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                          <FormControl
                            color="secondary"
                            variant="outlined"
                            className={classes.textField}
                          >
                            <InputLabel htmlFor="password">
                              Confirm Password
                            </InputLabel>
                            <OutlinedInput
                              fullWidth
                              required
                              name="Confrimpassword"
                              type={showPassword ? "text" : "password"}
                              id="Confrimpassword"
                              value={confirmPassword}
                              autoComplete="current-password"
                              onChange={handleConfirmPassword}
                              color="secondary"
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              labelWidth={70}
                            />
                            {confirmpwerror && (
                              <FormHelperText error={true}>
                                Confirm Password Doesn't match With Password
                              </FormHelperText>
                            )}
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Button
                            disabled={diablebtn}
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Update PassWord
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <Notification notify={notify} setNotify={setNotify} />
      </Container>
    </div>
  );
};

export default Setting;
