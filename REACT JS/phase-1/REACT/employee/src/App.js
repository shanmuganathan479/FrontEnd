
import './App.css';
import {data}from"./data"
import React,{useState,useEffect} from 'react';
import Modal from "./createEmployee";
import EditForm from './editForm'
import { Button } from '@mui/material';

const App=()=> {
  const [employees,setEmployees]=useState(null);
  useEffect(()=>{
    setEmployees(data);

  
},[]);
let [openAddEmpModal,setOpenAddEmpModal]=useState(false)
let [openEditForm,setOpenEditForm] = useState(false)
let [saveEditValue,setSaveEditValue] = useState("")


const addEmployee=()=>{
  setOpenAddEmpModal(true)
}
const handleDelete=(index)=>{
  let oldEmplist=[...employees]
  oldEmplist.splice(index,1)
  setEmployees(oldEmplist)
 

  }
  const closeAddEmpModal=() => {
    setOpenAddEmpModal(false)
 }
 const closeEditEmpModel = () => {
  setOpenEditForm(false)
}
const pushEmp=(emp)=> {
 let oldEmpList = [...employees]
 oldEmpList.push(emp)
 setEmployees(oldEmpList)
}
const handleEdit=(emp)=>{
  setOpenEditForm(true)
  setSaveEditValue(emp)
}
const updateEmp=(updatedData)=>{
  let {name,id,place,dept} = updatedData
  const updateEmp = employees.map(emp=>{
    if(emp.id === id){
      emp.name=name
      emp.place=place
      emp.dept=dept
      
    }
    return emp
  })
  setEmployees(updateEmp)
}

  return (
    
    <div  class="main">
      <Button onClick={addEmployee} variant="contained" color="success">Add Employee</Button>  
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
          employees && employees.map((emp,index)=>{
            return(
              <tr>
              <td>{emp.name}</td>
                           <td>{emp.id}</td>
                           <td>{emp.place}</td>
                           <td>{emp.dept}</td>
                           <td style={{gap:"20px"}}>
                           <div style = {{display:"grid", gridTemplateColumns:"100px 100px", gridGap:"5px", margin:"30px"}}>
                           <Button   onClick={()=>handleEdit(emp)} variant="contained" color="success">Edit</Button>
                           <Button onClick={()=>handleDelete(index)} variant="contained" color="error">Delete</Button>
                           </div>
                           </td>

          
              </tr>
          )
  
          })
        }
      </tbody>
      </table>
      {openAddEmpModal && <Modal
             openAddEmpForm={openAddEmpModal}
             closeAddForm={closeAddEmpModal}
             pushEmp={(emp)=>pushEmp(emp)}
            />}
            {openEditForm && <EditForm
        openEditEmpForm={openEditForm}
        editValue={saveEditValue}
        closeAddForm={closeEditEmpModel}
        updateEmployee={(emp) => updateEmp(emp)}
      />}
      
  
    </div>
    
    
  );
}

export default App;







