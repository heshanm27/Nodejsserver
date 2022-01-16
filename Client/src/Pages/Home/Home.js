
import { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  CssBaseline,
  makeStyles,
  Typography,CardActions,Button,Box, Divider

} from "@material-ui/core";



import LearMore from "./LearnMore";
import Landing from "./Landing";
import FooterPage from "./Footer";
import Brand from "./Brand";
import ContactUs from "./Contactus";
import Header from "../../component/Header";
import wave from "../../img/wave.svg"
const userStyle = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
 
  
  },
  divider:{
      backgroundColor:theme.palette.background.paper
  }
}));

const Home = (props) => {
  const {darkmode,setDarkMode} = props 
  const classes = userStyle();
  return (
  
    <>
    
     <Header darkmode={darkmode} setDarkMode={setDarkMode}/>
       <Landing/>
      

      <Divider variant="middle" light={true}  />
      <LearMore/>
      <Divider variant="middle" light={true}/>
      <Brand/>
      <Divider variant="middle" light={true}/>
      <ContactUs/>
      <FooterPage/> 
    </>
 
  );
};
//using props
export default Home;
