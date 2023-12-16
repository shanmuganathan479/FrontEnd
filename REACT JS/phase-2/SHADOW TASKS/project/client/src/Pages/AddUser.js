import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';
import { useState, useEffect } from "react";


export default function AddUser(props) 
{
   
    let [newValues,setNewValues]=useState({
        id:"",
        firstname:"",
        lastname:"",
        email:"",
        phonenumbeer:"",
        password:"",
        status:"",
       
        })
        const handleInputChange=(e)=>{
            setNewValues((prevValues)=>{
                return{
                    ...prevValues,
                    [e.target.name]:e.target.value

                }
            })
        }
        const handleClose=()=>{
            props.closeForm()
        }
        const handleSubmit=()=>
        {
           props.addNewValues(newValues);
           handleClose();

        }

        const handleClearInputBox=()=>{
            // alert("vanakam da mapla working")

            setNewValues((prevValues)=>{
                return{
                    ...prevValues,
                    id:"",
                    firstname:"",
                    lastname:"",
                    email:"",
                    phonenumbeer:"",
                    password:"",
                    status:"",
                }
        })}
     
    
  return (
    <div>
        <Modal
                open={props.openAddEmpForm}
                
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                    
                    <p onClick={handleClose} className="closeButton">X</p>
                    <h1>ADD USER</h1>
                    <div>      
                    <div>
                        <label>Id:</label>
                        <br/>
                        <input value={newValues.id} name="id" onChange={handleInputChange} type="number" />
                    </div>

                        <div>
                        <label>FirstName:</label>
                        <br/>
                        <input value={newValues.firstname} name="firstname" onChange={handleInputChange} type="text" />
                    </div>
                   
                    <div>
                        <label>LastName:</label>
                        <br/>
                        <input value={newValues.lastname} name="lastname" onChange={handleInputChange} type="text" />
                    </div>
                   
                    <div>
                        <label>Email:</label>
                        <br/>
                        <input value={newValues.email} name="email" onChange={handleInputChange} type="text" />
                    </div>
                                     
                    <div>
                        <label>PhoneNumber:</label>
                        <br/>
                        <input value={newValues.phonenumbeer} name="phonenumbeer" onChange={handleInputChange} type="number" />
                    </div>
                      
                    <div>
                        <label>Password:</label>
                        <br/>
                        <input value={newValues.password} name="password" onChange={handleInputChange} type="text" />
                    </div>

                    <div>
                        <label>Status:</label>
                        <br/>
                        <input value={newValues.status} name="status" onChange={handleInputChange} type="text" />
                    </div>
                   <br/> 
                    <div>
                    <Button onClick={handleClearInputBox} variant="contained" color="error">Clear</Button> 
                    <Button onClick={handleSubmit} variant="contained" color="success">Save</Button> 
                    </div>
                    </div>
                    
                </Box>
            </Modal>

    </div>
    


  )
}


