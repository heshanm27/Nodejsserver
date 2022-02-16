import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
  CardActions,
  Button,
  Box,
  Divider,
} from "@material-ui/core";

import LearMore from "./LearnMore";
import Landing from "./Landing";
import FooterPage from "./Footer";
import Brand from "./Brand";
import ContactUs from "./Contactus";
import Header from "../../component/Header";
import AboutUs from "./AboutUs";

import { motion, useViewportScroll, useTransform } from "framer-motion";

const userStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = (props) => {
  const classes = userStyle();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Header />
      <Landing />
      <AboutUs />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 1 }}
      >
        <LearMore />
      </motion.div>

      <Brand />

      <Divider variant="middle" light={true} />
      <ContactUs />
      <FooterPage />
    </>
  );
};
//using props
export default Home;
