import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { useToast } from '@chakra-ui/react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignContent:'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },paper:{
      marginTop:'80px',
      padding:'20px'
  }
}));

export default function ForgotPassword() {
    const toast=useToast()
    const  navigate = useNavigate();
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
  const classes = useStyles();
  const {ForgotPassword} = useAuth()

  const [isSubmitting, setIsSubmitting] = useState(false)


    const handleLogin = async (e)=>{

        e.preventDefault()
        // your login logic here

        if(!email){
            toast({
                description:"Credentials not valid",
                status:'error',
                duration:5000,
                isClosable:true
              })
          return
        }

        ForgotPassword(email)
            .then(res=>{
              toast({
                  description: 'Reset Email Sent,Check Your Email For Further Instructions',
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })

            })
            .catch(e=>{
              toast({
                  description: 'Email Not Registred',
                  status: 'error',
                  duration: 9000,
                  isClosable: true,
                })
            }).finally(()=>{setIsSubmitting(false)})



          }

    


  return (
    <Container component="main" maxWidth="sm">
    <Paper className={classes.paper}>
      <CssBaseline />
      <div className={classes.paper}>
      <center>
        <Avatar className={classes.avatar}>
          <RefreshIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography></center>
        <form className={classes.form} noValidate onSubmit={(e)=>handleLogin(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoFocus
            color='secondary'
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
              <Link href="/login" variant="body2" color='secondary'>
                Login
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
  );
}