import React from 'react'
import { makeStyles } from '@mui/styles';
import profileImage from './assests/images/profile.jpg'

const useStyles = makeStyles({
  root:
  {
    height: 1,
  },
  profileContainer:
  { 
    position: "relative",
    left: 300,
    bottom: 765,
    width: 1000,
  },
  headerContainer:
  {
    position: "relative",
    left: 636,
    bottom: 800,
  },
  imageContainer:
  {
    width: 1050,
    height: 542
  },
})

export default function Profile() {
  
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <h2 className={classes.headerContainer}>PROFILE</h2>
    <div className={classes.profileContainer}><h1>Profile</h1>
    <img className={classes.imageContainer} src={profileImage} alt='no img'></img>
    </div>
   </div>
  )
}
