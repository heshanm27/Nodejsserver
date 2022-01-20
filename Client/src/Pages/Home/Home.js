import { useState } from "react";
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
import wave from "../../img/wave.svg";
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
  const { darkmode, setDarkMode } = props;
  const classes = userStyle();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      <Header darkmode={darkmode} setDarkMode={setDarkMode} />
      <Landing />

      <Divider variant="middle" light={true} />
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          opacity,
        }}
      >
        <LearMore />
      </motion.div>
      <Divider variant="middle" light={true} />

      <Brand />

      <Divider variant="middle" light={true} />
      <ContactUs />
      <FooterPage />
    </>
  );
};
//using props
export default Home;
