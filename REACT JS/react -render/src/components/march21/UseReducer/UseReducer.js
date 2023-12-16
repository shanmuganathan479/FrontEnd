import React, { useReducer } from "react";

const intialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "incre":
      return state + 1;

    case "decre":
      return state - 1;

    case "reset":
      return intialState;

    case "increment50":
      return intialState+50;
    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);

  console.log("UseReducer Re-render");
  return (
    <div>
      <h1>2)UseReducer</h1>
      <h2 className="note">Misbehaving </h2>
      <h1>{count}</h1>

      <button onClick={() => dispatch("incre")}>Increment</button>
      <br />
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
      <br />
      <button onClick={() => dispatch("increment50")}>Increment 50</button>
      <ol>
        <li>Dispatch function cause the Re-render</li>
        <li>Execption is when you update the state with same state</li>
        <li>same value after intial render wont Re-render</li>
        <li>same value after Re-render cause the Re-render and 1 more tym render and bails out from subsquent render </li>
      </ol>
    </div>
  );
}

export default UseReducer;
