import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

const EditData = (props) => {
  let [editMoreValues, setEditMoreValues] = useState({
    name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
  });
  useEffect(() => {
    if (props.moreData?._id) {
      setEditMoreValues(props.moreData);
    }
  }, [props.moreData]);
  
  const handleInputChange = (e) => {
    setEditMoreValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  // const handleSubmit = () => 
  // {
  //   props.editValues(editMoreValues);
  // };

  const closeButton1 = () => 
  {
    //alert("close button")
    props.closMoreValues();
  };

  // const handleClearInputBox = () => {
  //   setEditValues((prevValues) => {
  //     return {
  //       ...prevValues,
  //       name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
  //     };
  //   });
  // };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100%",
          margin: "80px 30px 30px 30px",
        }}
      >
        <h1> MORE DATAS OF STUDENTS </h1>
        <div>
          <label htmlFor="">name:</label>
          <input
            value={editMoreValues.name}
            disabled="true"
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">registernumber:</label>
          <input
            value={editMoreValues.registernumber}
            disabled="true"
            name="registernumber"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">gender:</label>
          <input
            value={editMoreValues.gender}
            disabled="true"
            name="gender"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">school:</label>
          <input
            value={editMoreValues.school}
            disabled="true"
            name="school"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">location:</label>
          <input
            value={editMoreValues.location}
            disabled="true"
            name="location"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">email:</label>
          <input
            value={editMoreValues.email}
            disabled="true"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">address:</label>
          <input
            value={editMoreValues.address}
            disabled="true"
            name="address"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">mark:</label>
          <input
            value={editMoreValues.mark}
            disabled="true"
            name="mark"
            onChange={handleInputChange}
          />
        </div>

        <div>
          {/* <Button onClick={handleClearInputBox}>Clear</Button> */}
          {/* <Button onClick={handleSubmit}>Save</Button> */}
          <Button onClick={closeButton1}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default EditData;
