import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { ListItem,ListItemIcon, ListItemText,} from "@material-ui/core";
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    boxContainer:
    { 
       '& > :not(style)': {
          width: 150,
          height: 100,
          backgroundColor: "#202020",
          position: "relative",
          right: 65,
          bottom: 40,
          zIndex: 1,
          border: "2px solid SlateBlue"
        },
        "& .MuiListItemIcon-root":
         {
           color: "white"
         },
         "& .MuiListItemText-root":
         {
          color: "white"
         }
    },
    items:
    {    
    "&:hover": {
      backgroundColor: "SlateBlue",
      borderRadius: 5, 
    },
  },
  textContainer:
  {
    color: "black",
    textDecoration: "none",
  },
})

export default function Dropdown() {

 const classes = useStyles();
 const navigate = useNavigate();

 const handleLogout =()=>
 {
   alert("Are you sure want to log out?")
   navigate("/");
 }
 
  return (
    <div>
     <Box className={classes.boxContainer}>
      <Paper>
       <ListItem className={classes.items}  > 
          <ListItemIcon className={classes.dropDownIcons} ><SettingsApplicationsSharpIcon/></ListItemIcon>
          <ListItemText className={classes.textContainer} >Settings</ListItemText>
       </ListItem>
        <ListItem onClick={handleLogout} className={classes.items}  > 
          <ListItemIcon><ExitToAppSharpIcon/></ListItemIcon>
          <ListItemText className={classes.textContainer} >Logout</ListItemText>
        </ListItem>
      </Paper>
    </Box>
    </div>
  )
}
