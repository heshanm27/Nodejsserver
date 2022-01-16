import { Box, Button, Container, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React,{useRef} from 'react';
import { useLocation } from 'react-router';
import { useReactToPrint } from "react-to-print";
import Pdftemplate from './Pdftemplate';

const useStyle = makeStyles((theme)=>({
    roots: {
      margin:'20px auto',
        
       
      
        background: theme.palette.background.paper,
        
      },
      container: {
        margin: "10px auto",
      
        padding:'20px',
        backgroundColor:'white',
        color:'black',
       
      },card:{
        
          margin:'0 auto',
         
          
      }
    


}))

const Pdf = () => {  
 const location =useLocation()
 const obj=location.state
 
    const classes =useStyle()
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div  id="review">
    <Container component="main" maxWidth="md" color='red' >
      <CssBaseline />
   
    <Paper className={classes.container}   >
    <div ref={componentRef}>
   <Pdftemplate props={obj} />
   </div>
        </Paper>
        <div style={{display:'flex',justifyContent:'center'}} className={classes.roots}>
        <Button variant='contained' color="secondary" onClick={handlePrint} >  Print </Button> 
        </div>
        </Container>
    </div>
 
     
  )
}
export default Pdf