import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ordered, restocked } from "./Chicken65Slice";
const Chicken65View = () => {
  const chicken65Quantity = useSelector(
    (state) => state.chicken65.chickenQuantity
  );
  const dispatch=useDispatch()
  return (
    <div>
      <h1>Chicken65 Stock -{chicken65Quantity}</h1>
      <button onClick={()=>dispatch(ordered())}>Buy chicken65</button>
      <button onClick={()=>dispatch(restocked(1))}>cancell chicken65</button>
    </div>
  );
};

export default Chicken65View;
