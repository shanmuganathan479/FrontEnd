import React, { useState } from "react";
import { studentList } from "./StudentList";
const NameList = () => {

    const [data, setData] = useState(studentList)
    const handleDelete=(e)=>{
     const value = e.currentTarget.id
    //  console.log(value)

     const deletePerson = data.filter((item)=>{
       return  value != item.studentId
     })
    //  console.log(deletePerson)
    setData(deletePerson)
    }

  return (
    <div>
      <h1>NameLists</h1>
      {data.map((item) => {
        return (
          <div key={item.studentId}>
            {item.studentId}. {item.studentName}
            <button onClick={handleDelete} id={item.studentId}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default NameList;
