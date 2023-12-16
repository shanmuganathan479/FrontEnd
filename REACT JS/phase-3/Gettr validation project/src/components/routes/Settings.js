import React from 'react'
import { makeStyles } from '@mui/styles';
import settingImage from './assests/images/settings.png'

const useStyles = makeStyles({ 
  root:
  {
    height: 1,
  },
  settingsContainer:
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

export default function Settings() {

  const classes = useStyles();

  return (
  <div className={classes.root}>
    <h2 className={classes.headerContainer}>SETTINGS</h2>
    <div className={classes.settingsContainer}><h1>Settings</h1>
    <img className={classes.imageContainer} src={settingImage} alt='no img'></img>
    </div>
  </div>
  )
}
