import React from "react";
import ContextB from "./ContextB";

const ContextA = () => {
  return (
    <div>
      <h1>UseContext</h1>
      <h2>Context A</h2>
      <ContextB />
    </div>
  );
};

export default ContextA;
