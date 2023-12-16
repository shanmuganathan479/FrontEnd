import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const closeForm = () => {
        props.closeAddForm()
    }

    let [name,setName] = useState("")
    let [id,setId] = useState("")
    let [place,setPlace] = useState("")
    let [dept,setDept] = useState("")

    const handleEmpDetails=(e)=> {
        if(e.target.name === "name") {
            setName(e.target.value)
        }
        if(e.target.name === "id") {
            setId(e.target.value)
        }
        if(e.target.name === "place") {
            setPlace(e.target.value)
        }
        if(e.target.name === "dept") {
            setDept(e.target.value)
        }
    }
    const saveEmp=()=> {
        props.pushEmp({name,id,place,dept})
        props.closeAddForm()
    }
    const clearForm=()=> {
        setName("")
        setId("")
        setPlace("")
        setDept("")
     }

    return (
        <div>

            <Modal
                open={props.openAddEmpForm}
                //onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{backgroundColor : "pink"}}>
                    <p onClick={closeForm} style={{ color: "red", fontsize: "50px", cursor: "pointer" }}>X</p>
                    <div style = {{backgroundColor : "pink", display:"grid", justifyContent:"center" }}>
                        <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Name:</label>
                        <input value={name} name="name" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Id:</label>
                        <input  value={id} name="id" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Place:</label>
                        <input value={place} name="place" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Dept:</label>
                        <input  value={dept} name="dept" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"100px 100px", gridGap:"20px", margin:"30px"}}>
                    <Button onClick={clearForm} variant="contained" color="error">Clear</Button> 
                    
                    <Button onClick={saveEmp} variant="contained" color="success">Save</Button> 
                    </div>
                    </div>
                    
                </Box>
            </Modal>
        </div>
    );
}