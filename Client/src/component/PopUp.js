import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useTheme } from '@material-ui/core/styles';
import EngineForm from '../Pages/FormPage/EngineForm';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyle = makeStyles((theme)=>({

    displaywraper:{
        padding:theme.spacing(1),
        position:'absolute',
        top:theme.spacing(4),
        width:'100%'
    },iconbtn:{
        '&.MuiIconButton-colorPrimary':{
            color:theme.palette.error.light
        },  
       '&:hover':{
        backgroundColor:'#ffcdd2'
       }
    }

}))




export default function PopUp(props) {
    const classes = useStyle()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const{title,children,openPopup,setOpenPopUp} = props
    return (
      <Dialog open={openPopup} maxWidth={fullScreen ?'sm':'md'} classes={{paper:classes.displaywraper}}>
          <DialogTitle>
          <div style={{display:'flex'}}>
                <Typography varient="h6" component="div" style={{flexGrow:'1'}}>{title}</Typography>
                <IconButton color="primary" className={classes.iconbtn} 
                onClick={()=>setOpenPopUp(false)}
                >
                    <CloseIcon/>
                </IconButton>
                </div>
          </DialogTitle>
          <DialogContent dividers >
        {children}
          </DialogContent>
      </Dialog>
    )
}
