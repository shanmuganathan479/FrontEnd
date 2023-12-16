import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import navProfile from "../assests/icons/navProfile.svg"
import arrowDown from "../assests/images/double-arrow-down-2.svg"
import Dropdown from './Dropdown';

const useStyles = makeStyles({
    iconContainer:
    {
        position:"relative",
        left: 1250,
        bottom: 106,
        marginRight: 1270,
        width: 40,
        height: 40,
    },
    userContainer:{
      position: "relative",
      top: 50,
      right: 65,
    },
    arrowIcon:
    {
      left:  50,
      position: "relative",
      bottom: 40,
    }
})

export default function Logout() {

 const classes = useStyles();
 const [open,setopen]= useState(false);
 
 const handleClick=()=>
 {
  setopen((prev) => !prev);
 }

  return (
    <div> 
      <div className={classes.iconContainer} >
       <img onClick={handleClick} src={navProfile} alt="noImg"></img>
       <img onClick={handleClick} src={arrowDown} alt="noImg" className={classes.arrowIcon}></img>
       {
        open && (<Dropdown/>)
       }
     </div>  
    </div>
  )
}


