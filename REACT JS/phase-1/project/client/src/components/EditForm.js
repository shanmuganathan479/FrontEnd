import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";

const EditData = (props) => {
  let [editEmpValues, setEditValues] = useState({
    name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
  });
  useEffect(() => {
    if (props.selectedItem?._id) {
      setEditValues(props.selectedItem);
    }
  }, [props.selectedItem]);
  
  const handleInputChange = (e) => {
    setEditValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => 
  {
    props.editValues(editEmpValues);
  };

  const closeButton = () => 
  {
    // alert("close")
    props.closeEditValues();
  };

  const handleClearInputBox = () => {
    setEditValues((prevValues) => 
    {
      return {
        ...prevValues,
        name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
      };
    });
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "100%",
          margin: "80px 30px 30px 30px",
        }}
      >
        <div>
          <label htmlFor="">name:</label>
          <input
            value={editEmpValues.name}
            name="name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">registernumber:</label>
          <input
            value={editEmpValues.registernumber}
            name="registernumber"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">gender:</label>
          <input
            value={editEmpValues.gender}
            name="gender"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">school:</label>
          <input
            value={editEmpValues.school}
            name="school"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">location:</label>
          <input
            value={editEmpValues.location}
            name="location"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="">email:</label>
          <input
            value={editEmpValues.email}
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">address:</label>
          <input
            value={editEmpValues.address}
            name="address"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">mark:</label>
          <input
            value={editEmpValues.mark}
            name="mark"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <Button onClick={handleClearInputBox}>Clear</Button>
          <Button onClick={handleSubmit}>Save</Button>
          <Button onClick={closeButton}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default EditData;
