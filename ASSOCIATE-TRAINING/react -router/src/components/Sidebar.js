import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import SmartphoneSharpIcon from "@mui/icons-material/SmartphoneSharp";
import LaptopChromebookSharpIcon from "@mui/icons-material/LaptopChromebookSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import DevicesOtherSharpIcon from "@mui/icons-material/DevicesOtherSharp";
import { NavLink } from "react-router-dom";
import logo from "../components/assests/engineering_2786964 (2).png";
const useStyles = makeStyles({
  listContainer: {
    backgroundColor: "#43389D",
    width: 200,
    height: "160vh",
    position: "relative",
    top: 18,
  },
  icons: {
    color: "white",
  },
  text: {
    color: "white",
  },
  logo: {
    width: 50,
    height: 50,
  },
  items: {
    textDecoration: "none",
    color: "#8B93DA",
    "&:hover": {
      backgroundColor: "#362F78",
      color: "white",
    },
  },
  headerContainer: {
    display: "flex",
    alignItems: "start",
  },
  header: {
    color: "white",
    position: "relative",
    left: 10,
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.listContainer}>
        <div className={classes.headerContainer}>
          <img src={logo} alt="No logo" className={classes.logo} />
          <h3 className={classes.header}> SHAN'S MART</h3>
        </div>
        <ListItem className={classes.items} component={NavLink} to="">
          <ListItemIcon>
            <DashboardSharpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Dashboard</ListItemText>
        </ListItem>

        <ListItem className={classes.items} component={NavLink} to="/mobiles">
          <ListItemIcon>
            <SmartphoneSharpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Mobiles</ListItemText>
        </ListItem>

        <ListItem className={classes.items} component={NavLink} to="/laptops">
          <ListItemIcon>
            <LaptopChromebookSharpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Laptop</ListItemText>
        </ListItem>

        <ListItem
          className={classes.items}
          component={NavLink}
          to="/accessories"
        >
          <ListItemIcon>
            <DevicesOtherSharpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText className={classes.text}>Accessories</ListItemText>
        </ListItem>

        <ListItem
          className={classes.items}
          component={NavLink}
          to="/about"
          replace
          // used to 2 link back
          // reloadDocument
          // Reload entire document

        >
          <ListItemIcon>
            <InfoSharpIcon className={classes.icons} />
          </ListItemIcon>
          <ListItemText className={classes.text}>About</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
