import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {order,restock} from "./iceCreamSlice"
export const IceCreamView = () => {
  const iceNo = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>IceCream Store {iceNo}</h2>
      <h3>Number of Ice</h3>
      <button onClick={()=>dispatch(order())}>order</button>
      <button onClick={()=>dispatch(restock(20))}>restock</button>
    </div>
  );
};
