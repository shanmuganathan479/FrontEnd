import React, { useReducer,useEffect } from "react";

const initState = {
  firstCounter: 0,
  secondCounter: 100,
};

const reducer = (state, action) => {
  // console.log(action,"action")
  // console.log(action.type,"type")

  switch (action.type) {
    case "increment":
      return { ...state,firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state,firstCounter: state.firstCounter - action.value };
    case "reset":
      return initState;

    case "increment10":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement10":
      return { ...state,secondCounter: state.secondCounter - action.value };

    default:
      return state;
  }
};
const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  //Multiple useReducer
  //But the reducer function is same
  // we are going to use the seperate state and dispatch function

  const [stateTwo, dispatchTwo] = useReducer(reducer, initState);

  const handleClick=()=>{
    return console.log("first")
    console.log("usereducer") 
    console.log("usereducer 2")
  }
  useEffect(()=>{
    handleClick();
  },[])

  return (
    <div>
      <h1>UseReducer</h1>
      <h2>Count -{state.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <h2>Count2 - {state.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
        Increment10
      </button>
      <button onClick={() => dispatch({ type: "decrement10", value: 10 })}>
        Decremt10
      </button>

      <h2>CountTwo -{stateTwo.firstCounter}</h2>
      <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default ReducerCounter;
