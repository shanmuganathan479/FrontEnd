import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const closeForm = () => {
    props.closeAddForm()
  }
  useEffect(()=>{
    setName(props.editValue.name)
    setId(props.editValue.id)
    setPlace(props.editValue.place)
    setDept(props.editValue.dept)
    
    return ()=>{
    setName(null)
    setId(null)
    setPlace(null)
    setDept(null)
  
    }
  },[])
  let [name,setName]=useState("")
  let [id,setId] = useState("")
  let [place,setPlace] = useState("")
  let [dept,setDept] = useState("")
  let [inpValues,setInpValues]=useState({
    name:props.editValue.name,id:props.editValue.id,place:"",dept:"",
  })
  const handelEmpDetails=(e)=>{
    if(e.target.name === "name"){
      setName(e.target.value)
    }
    else if(e.target.name === "id"){
      setId(e.target.value)
    }
    else if (e.target.name === "place"){
      setPlace(e.target.value)
    }
    else if (e.target.name === "dept"){
      setDept(e.target.value)
    }
 
  }
  const updateEmp=()=>{
    props.updateEmployee({name,id,place,dept})
    props.closeAddForm()
  }
  const clearForm=()=>{
    setName(null)
    setId(null)
    setPlace(null)
    setDept(null)

  }
  return (
    <div>
      <Modal
        open={props.openEditEmpForm}
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
                        <input disabled={true} value={id} name="id" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Place:</label>
                        <input value={place} name="place" onChange={handleEmpDetails} type="text" />
                    </div>
                    <div style = {{display:"grid", gridTemplateColumns:"80px 200px",margin:"20px"}}>
                        <label style={{ color: "black", fontsize: "50px" }}>Dept:</label>
                        <input  value={dept} name="dept" onChange={handleEmpDetails} type="text" />
                    </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "80px 200px",gridGap:"20px",margin:"30px" }}>
                <Button onClick={clearForm}  variant="contained" color="error">
                  Clear
                </Button>
                <Button onClick={updateEmp} variant="contained" color="success">Save</Button>
            
              </div>
            </div>
        
        </Box>
      </Modal>
    </div>
  );
}
