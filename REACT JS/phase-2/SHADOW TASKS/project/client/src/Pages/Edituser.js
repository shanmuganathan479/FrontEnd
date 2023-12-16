import React,{useEffect, useState} from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';

const EditUser=(props)=>{
    let [editValues, setEditValues] = useState({

    id:props.saveData.id,
    firstname:props.saveData.firstname,
    lastname:props.saveData.lastname,
    email:props.saveData.email,
    phonenumbeer:props.saveData.phonenumbeer,
    password:props.saveData.password,
    status:props.saveData.status
    
    })
    

    const handleInputChange=(e)=>{
        setEditValues((prevValues)=>{
            
            return{
    
                ...prevValues,
                [e.target.name]:e.target.value
            
            }
        })
    }

    const handleClose=()=>{
        props.closeForm()
        
    }

    const handleSubmit =() =>{
        props.editValues(editValues)
        handleClose()
    }


    return(
   
    <div>
    <Modal
            open={props.openEditEmpForm}
           
        >
            <Box className="modal">
                
                <p onClick={handleClose} className="closeButton">X</p>
                <h1>EDIT USER</h1>
                <div>      
                <div>
                    <label>Id:</label>
                    <br/>
                    <input defaultValue={editValues.id} name="id" onChange={handleInputChange} type="number" />
                </div>

                    <div>
                    <label>FirstName:</label>
                    <br/>
                    <input defaultValue={editValues.firstname} name="firstname" onChange={handleInputChange} type="text" />
                </div>
               
                <div>
                    <label>LastName:</label>
                    <br/>
                    <input defaultValue={editValues.lastname} name="lastname" onChange={handleInputChange} type="text" />
                </div>
               
                <div>
                    <label>Email:</label>
                    <br/>
                    <input defaultValue={editValues.email} name="email" onChange={handleInputChange} type="text" />
                </div>
                                 
                <div>
                    <label>PhoneNumber:</label>
                    <br/>
                    <input defaultValue={editValues.phonenumbeer} name="phonenumbeer" onChange={handleInputChange} type="number" />
                </div>
                  
                <div>
                    <label>Password:</label>
                    <br/>
                    <input defaultValue={editValues.password} name="password" onChange={handleInputChange} type="text" />
                </div>

                <div>
                    <label>Status:</label>
                    <br/>
                    <input defaultValue={editValues.status} name="status" onChange={handleInputChange} type="text" />
                </div>
               <br/> 
                <div>
                {/* <Button onClick={handleClearInputBox} variant="contained" color="error">Clear</Button>  */}
                <Button onClick={handleSubmit} variant="contained" color="success">Save</Button> 
                </div>
                </div>
                
            </Box>
        </Modal>

</div>
    )   
}

export default EditUser;


