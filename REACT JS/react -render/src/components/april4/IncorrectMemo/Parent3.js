import React, { useState } from "react";
import Child3 from "./Child3";

export const Parent3 = () => {
  const [first, setfirst] = useState(0);
  const [name, setName] = useState("shan");

  console.log("Parent-3");
  return (
    <div>
      <h2>Parent3</h2>
      <button onClick={() => setfirst((prev) => prev + 1)}>
        Count {first}
      </button>
      <button onClick={() => setName("stark")}>ChangeName</button>
      <Child3 name={name}>
        <strong>Hello</strong>
        {/* Hello */}
      </Child3>
    </div>
  );
};
