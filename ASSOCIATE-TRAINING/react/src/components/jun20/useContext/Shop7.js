import React, { useContext } from "react";
import AppleContext, { SonyContext } from "../ContextAPI/AppleContext";

const Shop7 = () => {
    const sony =useContext(SonyContext)
    const iphone =useContext(AppleContext)

  return (
    <div>
      <h1>UseContext</h1>
      <h2>Shop7</h2>
      <h3 style={{color: 'red'}}>SONY  {sony} APPLE{iphone}</h3>
    </div>
  );
};

export default Shop7;
