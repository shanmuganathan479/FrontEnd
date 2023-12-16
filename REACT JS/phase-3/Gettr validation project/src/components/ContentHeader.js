import React from 'react'
import settrLogo from '../assests/images/settrLogo.jpg'
import { makeStyles } from '@mui/styles';
import Logout from './Logout';

const useStyles = makeStyles({
    logoContainer:
    {
       width: 40,
       height: 40,
       borderRadius: 50,
       position: "relative",
       left: 20,
       top: 20,
    },
    headerContainer:
    {
     position: "relative",
       left: 70,
       bottom: 45,
       fontFamily: "times",
       fontSize: "30px",
       marrginRight: 100,
    },
    navContainer:
    {
      borderBottom: "2px solid #9c27b0",
      height: 82,
      margin: "20px 20px 110px 20px"
    }
})

export default function ContentHeader() {

const classes = useStyles();

  return ( 
  <div>
    <div className={classes.navContainer} >
      <img src={settrLogo} alt="no img" className={classes.logoContainer}></img>
      <h2 className={classes.headerContainer} >SETTR</h2>
      <Logout />
    </div>
  </div>
  )
}
