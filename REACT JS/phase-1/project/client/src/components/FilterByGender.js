// import React, { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import Axios from "axios";


// const FilterByGender=(props)=>

// {
//   const [selectedGender,setSelectedGender] = useState({});
//   const [payRollData, setpayRollData] = useState("");


//   const handleGender = (e) =>
//    {
//      alert("working")

//     setSelectedGender(e.target.value)
//   }


//   useEffect(()=>
//   {
//     getData()

//   },[selectedGender])


//   const getData = () => 
//   {
//     // alert("hiiii");
    
//     Axios.get(`http://localhost:5000/${selectedGender}`)
//       .then((res) => {
//         setpayRollData(res.data.values);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };


//     const closeButton =() =>{
//         props.closFilterValues()
//     }


// return(
//         <FormControl style={{marginLeft:"80px",marginTop:"80px"}}>
//   <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//   <RadioGroup
//     aria-labelledby="demo-radio-buttons-group-label"
//     defaultValue="all"
//     name="radio-buttons-group"
//   >
//     <FormControlLabel onClick={handleGender} value="all" control={<Radio />} label="All" />

// <FormControlLabel onClick={handleGender} value="female" control={<Radio />} label="Female" />

// <FormControlLabel onClick={handleGender} value="male" control={<Radio />} label="Male" />

//     <Button onClick={closeButton}>Close</Button>
//   </RadioGroup>
// </FormControl>









//     )
// }
// export default FilterByGender