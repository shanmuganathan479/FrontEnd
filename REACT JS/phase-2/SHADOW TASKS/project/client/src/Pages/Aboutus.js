import { Modal } from '@mui/material';
import React from 'react'
import  { useState, useEffect } from "react";
import AddUser from './AddUser';
import Axios from 'axios'
import EditUser from './Edituser'

export default function Aboutus() {

  const [data, setData] = useState();
  const [addData,setAddData]=useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [saveEdit,setSaveEdit]=useState();

  useEffect(() => 
  {
    getData();
  },[]);

  const getData = () => 
  {
    
  fetch('http://localhost:5000/customers')
  .then(response => response.json())
  .then((data) =>{ console.log(data)

  setData(data)  ;
  }
  );
  };

  const handleAddUser=()=>
  {
   
    setAddData(true);
  }

  const insertNewData = (data) =>
   {

  //   fetch('http://localhost:5000/add')
  // .then(response => response.json())
  // .then((data) =>{ console.log(data)
    
  //   getData(); closeValues();
  // }
  // ); 
  
 console.log(data)
Axios.post("http://localhost:5000/add",data)
     
      .then((res) => {
        if (res.data.status === "success") {
          getData(); closeValues();
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };

  const  closeValues= () => {
    setAddData(false);
  };

  const handleDelete = (data) => 
  {

    Axios.post("http://localhost:5000/delete", { id: data })
      .then(getData())
      .catch((err) => {
        console.log(err);

      });

  };

  const updateData = (data) => {
    console.log(data)
    Axios.post("http://localhost:5000/update", data)

      .then((res) => {
        if (res.data.status === "success") {
          getData()
          closeEdit()
        }

      })
      .catch((err) => {
        console.log(err)
      })

  }

  const handleEditEmployee = (item) => 
  {
    // alert("vanakam da mapla")
    setOpenEditForm(true);

    setSaveEdit(item);
  }

  const closeEdit = () => {

    setOpenEditForm(false)
  }

  return (
    <div>
      <h1>USER DATAS</h1>
      <button className='addUserButton' onClick={handleAddUser}>Add User</button>

      <br/>
      <br/>
      <br/>
       <table width="100%">
        <thead>
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Password</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        </thead>

        <tbody>
            {data && 
              data.map((item) => {
                console.log(item)
                return (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumbeer}</td>
                    <td>{item.password}</td>
                    <td>{item.status}</td>
                    <td>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    <button onClick={() => handleEditEmployee(item)} >Edit</button> 
                    </td>
                  </tr>
                );
              })} </tbody>

       </table>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

     
{addData && <AddUser

openAddEmpForm={addData}
closeForm={closeValues}
addNewValues={(data) => insertNewData(data)}

/>}

{openEditForm && <EditUser

openEditEmpForm={openEditForm}

editValues={(editData) => updateData(editData)}

closeForm={closeEdit}

saveData={saveEdit}


/>}
    </div>
  )
}
