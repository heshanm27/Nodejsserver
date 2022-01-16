import { makeStyles, TextField } from '@material-ui/core'
import React from 'react'

const usestyle = makeStyles((theme) => ({
   
    roots: {
      '&.MuiFormControl-root': {

        width: "80%",
        [theme.breakpoints.down('sm')]:{
            width: "100%",
        },
        margin: theme.spacing(1),
      },
      
    },
  }));
  
export default function Inputprop(props) {
    const classes = usestyle();
    const {name,value,label,onChange,error=null,...other} =props
    return (
       <TextField
       className={classes.roots}
       variant="outlined"
       color='secondary'
       label={label}
       name={name}
       value={value}
       onChange={onChange}
        {...(error && {error:true,helperText:error})}
       {...other}
       >


       </TextField>
            
      
    )
}
