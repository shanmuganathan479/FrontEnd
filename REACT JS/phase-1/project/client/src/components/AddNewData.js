import React,{useState} from 'react'
import Button from '@mui/material/Button';
//import { process_params } from 'express/lib/router';
const AddNewData=(props)=>
{

 let[newEmpValues,setNewEmpValues]=useState({
    name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
 })


const handleInputChange=(e)=>{
 setNewEmpValues((prevValues)=>{
return{
    ...prevValues,
    [e.target.name]:e.target.value
}
 })
    }
    const handleSubmit=()=>{
        props.addnewValues(newEmpValues)
    }
    const closeButton =() =>{
        props.closeValues()
    }




    const handleClearInputBox=()=>{
        setNewEmpValues((prevValues)=>{
            return{
                ...prevValues,
                name:"",registernumber:"",gender:"",school:"",location:"",email:"",address:"",mark:""
        }
        })
    }


    return(
        <div style={{marginLeft:"80px",marginTop:"80px"}}>
            
           <div>
                <label htmlFor="">name</label>
                <input defaultValue={newEmpValues.name} name="name" onChange={handleInputChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="">register number</label>
                <input defaultValue={newEmpValues.registernumber} name="registernumber" onChange={handleInputChange}/>
            </div>
            <br/>
            <div>
                <label htmlFor="">gender</label>
                <input defaultValue={newEmpValues.gender} name="gender" onChange={handleInputChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">school</label>
                <input defaultValue={newEmpValues.school} name="school" onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="">location</label>
                <input defaultValue={newEmpValues.location} name="location" onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="">email</label>
                <input defaultValue={newEmpValues.email} name="email" onChange={handleInputChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">address</label>
                <input defaultValue={newEmpValues.address} name="address" onChange={handleInputChange}/>
            </div>
            <br/>

            <div>
                <label htmlFor="">mark</label>
                <input defaultValue={newEmpValues.mark} name="mark" onChange={handleInputChange}/>
            </div>
            <br/>

            <Button onClick={handleClearInputBox}>Clear</Button>
                <Button onClick={handleSubmit}>Save</Button>
                <Button onClick={closeButton}>Close</Button>
</div>

    )
}
export default AddNewData