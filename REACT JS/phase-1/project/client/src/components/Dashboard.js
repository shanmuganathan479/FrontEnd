import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddNewData from "./AddNewData";
import MoreData from "./MoreData"
import FilterByGender from "./FilterByGender"
import Button from "@mui/material/Button";
import Editicon from "../assests/edit.svg";
import Deleteicon from "../assests/delete.svg";
import Moreicon from "../assests/more.svg"

import swal from "sweetalert";
import Axios from "axios";
import EditForm from "./EditForm";


import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";



const Dashboard = () => {
  const [payRollData, setpayRollData] = useState("");
  const [newEmpForm, setNewEmpForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [closeEmpEditForm, setCloseEditForm] = useState(false)
  const [filterForm, setFilterForm] = useState(false);
  const [moreData, setMoreData] = useState({});



  // const topSchool =
  //  [
  //   { label: 'University of Genoa' },
  //   { label: 'Mills College'},
  //   { label: 'Universidad de Ciego de Avila' },
  //   { label: 'University of Zululand', },
  //   { label: 'National Ribat University', },
  //   { label: 'Angelo State University' },
  //   { label: 'Universidade Catolica Portuguesa' }
  // ]

  const [selectedGender,setSelectedGender] = useState("All");
  const [selectedSchool,setSelectedschool] = useState("All");
  const[school,setSchool]=useState("")

  useEffect(() => {
    
    getSchoolList();
    getData();
  }, []);

  const getData = () => 
  {
    Axios.get(`http://localhost:5000/getData/${selectedGender}/${selectedSchool}`)
   
      .then((res) => {
        setpayRollData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // data read
  // const getData = () => 
  // {
  //   Axios.get(`http://localhost:5000/getData/${selectedGender}`)
   
  //     .then((res) => {
  //       setpayRollData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };





  const handleAddEmployee = (item) => 
  {
    setNewEmpForm(true);
  };


  const handleEditEmployee = (item) => {
    setSelectedItem(item);
  };
  
  const closeForm = () => {
    setNewEmpForm(false);
  };

  const closeEdit = () => {
    setSelectedItem(false);
  };

  const insertNewData = (data) => {
    //console.log(data);
    Axios.post("http://localhost:5000/addemp", data)
      .then((res) => {
        if (res.data.status === "success") {
          closeEdit();
          closeMore();
          getData();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const updateData = (data) => 
  {
    console.log(data);

    Axios.post("http://localhost:5000/updateemp", data)
      .then((res) => {
        if (res.data.status === "success") {
          getData();
          closeEdit();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };








  const handleMoreEmployee = (item) => {
    setMoreData(item);
  };

  const closeMore = () => {
    setMoreData(false);
  };

  const updateData1 = (data) => 
  {
    console.log(data);

    Axios.post("http://localhost:5000/updateemp", data)
      .then((res) => {
        if (res.data.status === "success") {
          getData();
          closeMore();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };










  const closeFilter = () => {
    setFilterForm(false);
  };
  const handleFilter = (item) => 
  {
  
    //alert("working")
    setFilterForm(true);
  };









  const confirmDelete = () => {
    swal("Are you sure?", {
      dangerMode: true,
      buttons: true,
    });
  };

  const handleDelete = (data) => {
    // confirmDelete()
    Axios.post("http://localhost:5000/deleteemp", { id: data }).then((res) => {
      if (res.data.status === "success") {
        getData();
      }
    });
  };




  //filter
  const handleGender = (e) =>
   {
    //  alert("working")
     console.log(e)
    setSelectedGender(e.target.value)
  }


  const handleSchool = (e) =>
   {
    //  alert("working")
    //  console.log(value)
    setSelectedschool(e.target.value)
  }

  useEffect(()=>
  {
    getData()

  },[selectedGender,selectedSchool])





const getSchoolList=()=>
{
  Axios.get("http://localhost:5000/school")
  .then((res)=>
  {
    let schoolList=[...res.data]
    schoolList.push("All")
    setSchool(schoolList)

  })
}





  return (
    <div
      style={{
        margin: "50px",
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <div>
        
        <Button onClick={handleAddEmployee}>AddStudent</Button>
        {/* <Button onClick={handleFilter}>FilterByGender</Button> */}



        <FormControl>
  <FormLabel id="gender-radio-button">Gender</FormLabel>
  <RadioGroup
    // aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={selectedGender}
    name="radio-buttons-group"
  >
    <FormControlLabel onClick={handleGender} value="All" control={<Radio />} label="All" />

<FormControlLabel onClick={handleGender} value="female" control={<Radio />} label="Female" />

<FormControlLabel onClick={handleGender} value="male" control={<Radio />} label="Male" />

  </RadioGroup>
</FormControl>

{/* <Autocomplete
      defaultValue={selectedSchool}
      disablePortal
      id="drop-down"
      onClick={handleSchool}
      options={school}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="School" />}
    /> */}

    <FormControl >
  <InputLabel >School</InputLabel>
  <Select
    // labelId="demo-simple-select-label"
    // id="demo-simple-select"
    sx={{ width: 300 }}
    defaultValue={selectedSchool}
    // value={school}
    label="School"
    onChange={handleSchool}
    // options={school}
 
  >
    {

school.length > 0 && school.map(item => {

      return (

<MenuItem value={item}>{item}</MenuItem>

      )

      })

    }
    
    {/* <MenuItem value= {selectedSchool}>{school}</MenuItem>    */}

    {/* <MenuItem value={selectedSchool}>{school}</MenuItem>
    <MenuItem value={selectedSchool}>{school}</MenuItem> */}

  </Select>
</FormControl>





        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>register number</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>location</TableCell>
              
              <TableCell>school</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payRollData.length > 0 &&
              payRollData.map((item) => {
                return (
                  <TableRow>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.registernumber}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.school}</TableCell>
                    <TableCell>

                    <img
                        onClick={() =>handleMoreEmployee (item)}
                        width="16px"
                        height="16px"
                        src={Moreicon}
                      />

                      <img
                        onClick={() => handleEditEmployee(item)}
                        width="16px"
                        height="16px"
                        src={Editicon}
                      />
                      <img
                        onClick={() => handleDelete(item._id)}
                        width="16px"
                        height="16px"
                        src={Deleteicon}
                      />
                    
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
      
      {newEmpForm && (
        <AddNewData
          addnewValues={(newData) => insertNewData(newData)}
          closeValues={closeForm}
        />
      )}


      {selectedItem._id && (
        <EditForm
          selectedItem={selectedItem}
          editValues={(editData) => updateData(editData)}
          closeEditValues={closeEdit}
        />
      )}

      
 {moreData._id && (
        <MoreData
          moreData={moreData}
          moreValues={(mData) => updateData1(mData)}
          closMoreValues={closeMore}
        />
      )}
      


      
      {/* {payRollData && (
        <MoreData
          moreValues={(moreData) => getData(moreData)}

        />
      )} */}

       {/* {filterForm && (
        <FilterByGender

          filterValues={(filterData) => handleFilter(filterData)}
          closFilterValues={closeFilter}
        />
      )} */}
      
      {/* {selectedGender && (
        <Dashboard

          filterValues={(filterData) => handleFilter(filterData)}
         
        />
      )} */}



    </div>
  );
};

export default Dashboard;
