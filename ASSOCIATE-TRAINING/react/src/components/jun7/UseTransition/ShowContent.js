import React, { useState, useTransition } from "react";

const ShowContent = () => {
  const [name, setname] = useState("");
  const [data, setdata] = useState([]);
  const [ispending,startTransition]=useTransition()

  const handleName = (e) => {
     setname(e.target.value);  

     startTransition(()=>{
       const list = [];
       for (let i = 0; i < 10000; i++) {
          list.push(e.target.value)
       }
       setdata(list);
     })

  };
  console.log("useTransition hook");
  return (
    <div>
      <h1>UseTransition</h1>
      <input type="text" onBlur={handleName} name={name}/>
      {/* <button>submit</button> */}
      {/* <p>{data}</p> */}

      {
        ispending ? <h2>Loading.......</h2>:
        data.map((value,index) => {
          return <p key={index}>{value}</p>;
        })
      }

      {/* {data.map((value,index) => {
        return <p key={index}>{value}</p>;
      })} */}
      
    </div>
  );
};

export default ShowContent;
