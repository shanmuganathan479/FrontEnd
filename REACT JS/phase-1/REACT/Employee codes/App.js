import React,{ useEffect, useState } from "react";
import {Employee} from "./Employee";
import {Button} from '@mui/material';
import Modal from "./createEmployee";
import './App.css';
const App=()=> {
  const [employees, setEmployees] = useState(null);
  useEffect(()=> {
    setEmployees(Employee);
  },[]);
  let [openAddEmpModal,setOpenAddEmpModal] = useState(false)
  const addEmployees=() => {
     setOpenAddEmpModal(true)
  }
  const closeAddEmpModal=() => {
    setOpenAddEmpModal(false)
 }
 const pushEmp=(emp)=> {
   let oldEmpList = [...employees]
   oldEmpList.push(emp)
   setEmployees(oldEmpList)
 }
 const handleDelete=(index)=> {
   let oldEmpList = [...employees]
   oldEmpList.splice(index,1)
   setEmployees(oldEmpList)
 }

  return(
    <div class = "main">
       <Button onClick={addEmployees} variant="contained" color="success">Add Employee</Button> 
          
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id</th>
                  <th>Place</th>
                  <th>Dept</th>
                  <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                  {
                    employees && employees.map((emp,index)=> {
                      return(
                        <tr>
                           <td>{emp.name}</td>
                           <td>{emp.id}</td>
                           <td>{emp.place}</td>
                           <td>{emp.dept}</td>
                           <td style={{gap:"20px"}}>
                           <div style = {{display:"grid", gridTemplateColumns:"100px 100px", gridGap:"5px", margin:"30px"}}>
                           <Button  variant="contained" color="success">Update</Button>
                           <Button onClick={()=>handleDelete(index)} variant="contained" color="error">Delete</Button>
                           </div>
                           </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
            </table>
            <Modal
             openAddEmpForm={openAddEmpModal}
             closeAddForm={closeAddEmpModal}
             pushEmp={(emp)=>pushEmp(emp)}
            />
    </div>
  );
}
export default App;