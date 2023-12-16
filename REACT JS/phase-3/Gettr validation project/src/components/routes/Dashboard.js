import React from 'react'
import { makeStyles } from '@mui/styles';
import dashboardImage from './assests/images/dasshboard.jpg'

const useStyles = makeStyles({
   root:
   {
     height: 1,
   },
  dasboardContainer:
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

export default function Dashboard() {

  const classes = useStyles();

  return (
  <div className={classes.root}>
    <h2 className={classes.headerContainer}>DASHBOARD</h2>
    <div className={classes.dasboardContainer}>
      <h1>Dashboard</h1>
      <img className={classes.imageContainer} src={dashboardImage} alt='no img'></img>
    </div>
  </div>
  )
}
