import React, { useState } from "react";
import MobilesData from "./ImageData";
import { Grid } from "@mui/material";
const ImageSearch = () => {
  const [search, setSearch] = useState("");
  const [button, setbutton] = useState("");

  const handleChange = (e) => {
    setbutton(e.target.value)
    
  };

  const handleClick = () => {
    setSearch(button);
  };

  const filteredValues = MobilesData.filter((item) => {
    // console.log(item.name.toLowerCase());
    return button === ""
      ? MobilesData
      : item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.price.includes(search);
  });

  // console.log(search);
  
  return (
    <div>
      <h1>Search</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <Grid container spacing={2} sx={{ position: "relative", top: "100px" }}>
        {filteredValues.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <h2>{item.name}</h2>
              <img
                src={item.pics}
                alt="Not available"
                style={{ width: "350px", height: "350px" }}
              />
              <h2>{item.price}</h2>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ImageSearch;
