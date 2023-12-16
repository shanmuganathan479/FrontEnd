import React from 'react'
import { makeStyles } from '@mui/styles';
import notifyImage from './assests/images/notifiacations.png'

const useStyles = makeStyles({ 
  root:
  {
    height: 1,
  }, 
  notificationContainer:
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

export default function Notification() {

  const classes = useStyles();
  
  return (
  <div className={classes.root}>
    <h2 className={classes.headerContainer}>NOTIFICATION</h2>
    <div className={classes.notificationContainer}>
      <h1>Notification</h1>
      <img className={classes.imageContainer} src={notifyImage} alt='no img'></img>
    </div>
  </div>
  )
}
