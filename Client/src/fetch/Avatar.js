import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    Link,
    makeStyles,
    Paper,
    Typography,
  } from "@material-ui/core";
  import { useEffect, useState } from "react";

  import { db } from "../init/firebaseinit";
  import {  onSnapshot, collection } from "firebase/firestore";
import Slider from "react-slick";
  
  const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
    }, media: {
      height: '80px',
     width:'150px'
      },card:{
          display:'flex',
          justifyContent:'center',
          alignItems:'Center',
          borderRadius:'10px'
      }
  }));



  //main class
  const AvatrFetch = () => {
    const classes = useStyles();
    //db reference
    const colRef = collection(db, "Brand");
    const [Review, setReview] = useState([]);

    function getFireStoreData() {
        //getdata in real time
        onSnapshot(colRef, (snapshot) => {
          let post = [];
          snapshot.docs.map((doc) => {
            post.push({
              key: doc.id,
              ...doc.data(),
            });
          });
          setReview(post);
        });
      }

    useEffect(() => {
      getFireStoreData();
    }, []);
  
    return (
     <>
{Review.map((rev) => {
        return (
            <Grid  xs={12} sm={6} item md={2} key={rev.key}>
            <Link
                  href="https://fonts.google.com/specimen/Exo?query=exo"
                  target="_blank"
                ><Paper className={classes.card}>
         
              <img src={rev.Avatar} className={classes.media} />
       
          </Paper></Link>
          </Grid>
        );
      })}

     </>
    );
  };
  
  export default AvatrFetch;

  