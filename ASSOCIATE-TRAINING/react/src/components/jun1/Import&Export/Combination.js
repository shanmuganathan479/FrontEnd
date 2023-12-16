import React from "react";

const Combination = () => {
  return (
    <div>
      <h2>Combination of Default and Named</h2>
    </div>
  );
};

export default Combination;
// One default 

export const firstNamed = () => {
  return <div>Named1</div>;
};
// 1st Named

export const secondNamed = () => {
    return <div>Named2</div>;
  };
// 2nd Named
