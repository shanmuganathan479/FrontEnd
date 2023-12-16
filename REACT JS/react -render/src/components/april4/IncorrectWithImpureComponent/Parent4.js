import React, { useState } from "react";
import Child4 from "./Child4";
  const Parent4 = () => {
  const [first, setfirst] = useState(0);
  const [name, setName] = useState("shan");

  console.log("Parent-4");
  return (
    <div>
      <h2>Parent4</h2>
      <button onClick={() => setfirst((prev) => prev + 1)}>
        Count {first}
      </button>
      <button onClick={() => setName("stark")}>ChangeName</button>
      
      <Child4 name={name}/>
    </div>
  );
};
export default Parent4

