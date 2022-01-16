import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
  Paper,
  TextField,
  FormControlLabel,
  CssBaseline,
  Avatar,
  TextareaAutosize,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { getByDisplayValue } from "@testing-library/react";
import { useState } from "react";
import FrontCard from "../../component/Card";
import SendIcon from "@material-ui/icons/Send";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import LoopIcon from "@material-ui/icons/Loop";

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
  paper: {
    padding: "40px",
    marginTop: "20px",
  },
  submit: {
    marginTop: "20px",
  },
}));

const ContactUs = () => {
  const [spacing, setSpacing] = useState(5);
  const form = useRef();
  const classes = userStyle();
  const [isSending, setisSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setisSending(true);
    emailjs
      .sendForm(
        "service_hxyvrtg",
        "template_zs9ojps",
        form.current,
        "user_7OHXvJELTseRGSEo7t2fL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setisSending(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.roots} id="review">
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" color="textPrimary">
            Contact Us
          </Typography>
          <Paper className={classes.paper}>
            <form
              ref={form}
              className={classes.form}
              autoComplete="none"
              onSubmit={sendEmail}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                label="Name"
                type="text"
                id="name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="Message"
                label="Message"
                name="message"
                multiline
                rows={4}
              />

              {!isSending && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              )}
              {isSending && (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  endIcon={<LoopIcon />}
                >
                  Loading
                </Button>
              )}
            </form>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
