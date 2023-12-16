import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ordered, cancelled } from "./BriyaniSlice";
import { ordered as offeredAdded } from "../chicken65/Chicken65Slice";
import { restocked as offerCancelled } from "../chicken65/Chicken65Slice";

const BriyaniView = () => {
  const briyaniStock = useSelector((state) => state.briyani.briyaniQuantity);
  const dispatch = useDispatch();


  const handleOrder = () => {
    dispatch(ordered());
    dispatch(offeredAdded());
  };

  const handleCancel = () => {
    dispatch(cancelled());
    dispatch(offerCancelled(1))
    //payload
  };

  return (
    <div>
      <h1>Briyani Stock - {briyaniStock}</h1>
      <button onClick={handleOrder}>Buy briyani</button>
      <button onClick={handleCancel}>Cancel briyani</button>
      <h2 style={{ color: "red" }}>Buy 1 briyani and get 1 chicken65</h2>
    </div>
  );
};

export default BriyaniView;
