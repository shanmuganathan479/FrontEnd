import React, { useReducer } from "react";
import ExampleA from "./ExampleA";
import ExampleB from "./ExampleB";
import ExampleC from "./ExampleC";

const initState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value};

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value};
    case "reset":
      return initState
    default:
      return state
  }
};
export const Context = React.createContext()
const App2 = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <h1>UseContext+UseReducer</h1>
      <Context.Provider value={{count: count,dispatch: dispatch}}>
      <ExampleA />
      <ExampleB />
      <ExampleC />
      </Context.Provider>
    </div>
  );
};

export default App2;
