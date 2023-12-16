import React from "react";
import OfferData from "../data//OfferData";
import { makeStyles } from "@mui/styles";
import { Box, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    // border: "2px solid purple",
    textAlign: "center",
    justifyContent: "center",
    color: "purple",
    fontSize: 20,
  },
  imageContainer: {
    width: 280,
    height: 300,
  },
  prices: {
    color: "red",
  },
});
const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate()

  const handleSeeMoreMObile=()=>{
    navigate("/mobiles")
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        {OfferData.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              className={classes.container}
              //  boxShadow={5}
            >
              <h3>{item.name}</h3>
              <img
                src={item.pics}
                alt="No Pics"
                className={classes.imageContainer}
              />
              <h3 className={classes.prices}>
                <del>{item.price}</del>
              </h3>
              <h3>{item.offerPrice}</h3>
            </Grid>
          );
        })}
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        sx={{ position: "relative", left: 550 }}
        onClick={handleSeeMoreMObile}
      >
        See More Mobiles
      </Button>
    </div>
  );
};

export default Dashboard;
