import React from "react";
import  aboutUs from "../assests/about.jpg"
import { useLocation } from "react-router-dom";
const About = () => {
  const pathName = useLocation()
  console.log(pathName)
  return (
    <div>
      <h1>About</h1>
      <img src={aboutUs} alt="No page found" style={{width: 1200}}/>
    </div>
  );
};

export default About;
