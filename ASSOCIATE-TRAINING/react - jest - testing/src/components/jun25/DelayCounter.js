import React,{useEffect, useState} from "react";

const DelayCounter = () => {
  const [count, setcount] = useState(0);

 const handleIncrement=()=>{
    setTimeout(()=>{
     setcount(prev=>prev+1)
    },500)
 }
  return (
    <div>
      <h1>DelayCounter</h1>
      <h1 data-testid="output">{count}</h1>
      <button onClick={handleIncrement} data-testid= "delaybutton">Increment slowly</button>
    </div>
  );
};

export default DelayCounter;
