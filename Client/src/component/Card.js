import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import img from "../img/bg.svg";
import { db } from "../init/firebaseinit";
import {  onSnapshot, collection } from "firebase/firestore";
import Skeleton from '@material-ui/lab/Skeleton';

//main class
const FrontCard = () => {
  //db reference
  const colRef = collection(db, "Review");
  const [Review, setReview] = useState([]);
  const [isLoading,setLoading] = useState(true)
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
      setLoading(false)
    });
  }

  useEffect(() => {
    getFireStoreData();
  }, []);

  return (
    <>
      {!isLoading && Review.map((rev) => {
        return (
            <Grid  xs={12} sm={6} item md={3} key={rev.key} >
          <Card key={rev.id}>
            <CardActionArea>
              <CardHeader
                avatar={<Avatar alt={rev.Comment} src={rev.Avatar}/>}
                title={rev.CustomerName}
              />
              <CardMedia image={img} />

              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  align="justify"
                >
                  {rev.Comment}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Grid>
        );
      })}
      {isLoading && [1,2,3,4].map(key=>{
      
        return (
          <Grid  xs={12} sm={6} item md={3} key={key} >
          <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={210} height={118} />
          </Grid>
        )
      })}
    </>
  );
};

export default FrontCard;
