import React from 'react'
import { ListItem,ListItemIcon, ListItemText,} from "@material-ui/core";
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import AccountBoxSharpIcon from '@mui/icons-material/AccountBoxSharp';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import { makeStyles } from '@mui/styles';
import { Link, Outlet } from 'react-router-dom';
import ContentHeader from './ContentHeader';


const useStyles = makeStyles({
  contentContainer:
  {
    border: "3px solid SlateBlue",
    width: 250,
    height: 600,
    margin:20,
    borderRadius: 5,
    backgroundColor:"#202020",
    position:"relative",
    bottom: 95,
  },
  items:
  {    
    "&:hover": {
      backgroundColor: "SlateBlue",
      borderRadius: 5, 
    },
  },
  iconContainer:
  {
    color: "white",
  },
  textContainer:
  {
    color: "white",
    textDecoration: "none",
  },  
})

function Content() {
  
  const classes = useStyles();
  
 
  return (
    <div>   
        <div>
        <ContentHeader/>
        </div>
      <div className={classes.contentContainer}>        
       <Link to="dashboard">
        <ListItem className={classes.items}> 
           <ListItemIcon><DashboardSharpIcon className={classes.iconContainer} /></ListItemIcon>
           <ListItemText className={classes.textContainer} >Dashboard</ListItemText>
         </ListItem>
       </Link>

         <Link to="notification">
          <ListItem className={classes.items}> 
           <ListItemIcon><NotificationsActiveSharpIcon className={classes.iconContainer} /></ListItemIcon>
           <ListItemText className={classes.textContainer}  >Notification</ListItemText>
          </ListItem>
        </Link>

          <Link to="profile">
            <ListItem className={classes.items}> 
             <ListItemIcon><AccountBoxSharpIcon className={classes.iconContainer} /></ListItemIcon>
             <ListItemText className={classes.textContainer}  >Profile</ListItemText>
            </ListItem>
          </Link>

          <Link to="settings">
           <ListItem className={classes.items}           > 
            <ListItemIcon><SettingsApplicationsSharpIcon className={classes.iconContainer} /></ListItemIcon>
            <ListItemText className={classes.textContainer}  >Settings</ListItemText>
           </ListItem>
          </Link>

          <Link to="user">
           <ListItem className={classes.items}> 
            <ListItemIcon><SupervisedUserCircleSharpIcon className={classes.iconContainer} /></ListItemIcon>
            <ListItemText className={classes.textContainer}  >User</ListItemText>
           </ListItem> 
          </Link>
      </div>
       <Outlet/>
    </div>
  );
}

export default Content;
