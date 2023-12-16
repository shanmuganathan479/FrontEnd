import React, { useState,useMemo,useCallback } from "react";
import Child5 from "./Child5";

  const Parent5 = () => {
  const [first, setfirst] = useState(0);
  const [name, setName] = useState("shan");


  //1st scenario
  const avengers ={
     tony: "ironMan",
     steveRoges: "captain",
     bruce: "hulk"
  }
  const memoizedObject =useMemo(()=>avengers,[])   





  // 2nd scenario
  const handleAction=()=>{
    // console.log("Function")
    // alert("vanakam da mapla")
  }

  const memoizedFunction =useCallback(handleAction,[])
  console.log("Parent5");
  return (
    <div>
      <h2>Parent5 (Uncomment one by one and note the log statement)</h2>
      <h3 className="note">Here object and function always render parent and child</h3>
      <button onClick={() => setfirst((prev) => prev + 1)}>
        Count {first}
      </button>
      <button onClick={() => setName("stark")}>ChangeName</button>


      {/* <Child5 name={name} avengers={avengers} handleAction={handleAction} /> */}

      
     {/* Normal object prop */}
      {/* <Child5 name={name} avengers={avengers}/> */}
     {/* memoized object prop */}
      {/* <Child5 name={name} avengers={memoizedObject}/> */}

     {/* Normal function prop */}
     {/* <Child5 name={name} handleAction={handleAction}/> */}
     {/* memoized  function prop prop */}
     <Child5 name={name} handleAction={memoizedFunction}/>


    </div>
  );
};
export default Parent5

