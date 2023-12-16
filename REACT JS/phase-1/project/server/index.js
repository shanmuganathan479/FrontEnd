const express = require('express');
require('./dbConnection')
const morgan=require('morgan')
const cors= require('cors')
const studentSchema=require('./Model/studentSchema');
//const req = require('express/lib/request');

const app = express();
app.use(express.json())
app.use(cors())
app.use(morgan("combined"))


app.get('/school',async(req,res)=>
{
  let schoolData=await studentSchema.find().distinct("school")

  res.json(schoolData)

})


// app.get('/getData/:gender',async(req,res) => 
//   {
//     let {gender}=req.params
//     let  studentData=""
//     if(gender==="all")
//     {
//       studentData=await studentSchema.find()
//     }
//     else
//     {
//      studentData=await studentSchema.find({gender})
//     }
//     res.json(studentData)
//   })

  app.get('/getData/:gender/:school',async(req,res) => 
  {
    let {gender}=req.params
    let {school}=req.params
    let  studentData="";

    if (gender==="All" && school==="All") 
    {
      studentData=await studentSchema.find()
      
    } else if(gender==="All" && school!="All")
    {
      studentData=await studentSchema.find({school})
    }
    else if(gender!="All" && school==="All")
    {
      studentData=await studentSchema.find({gender})
    }
    else if(gender!="All" && school!="All")
    {
      studentData=await studentSchema.find({gender,school})
    }
    
   res.json(studentData) 
  })


  





// app.get('/',async(req,res)=>{
//     let studentData=await studentSchema.find()
// try{

//     res.json({Status:200,values:studentData})
// }
// catch(err){
//     res.send(err)
// }
// })


app.post("/addemp",async(req,res)=>{
let name = req.body. name
let registernumber = req.body.registernumber
let gender = req.body.gender
let school = req.body.school
let location=req.body.location
let email = req.body.email
let address = req.body.address
let mark= req.body.mark

let newEmpData= new studentSchema({
"name":name,
"registernumber":registernumber,
"gender":gender,
"school":school,
"location":location,
"email":email,
"address":address,
"mark": mark
})
try{
    await newEmpData.save()
    res.json({"status":"success","NewEmpAdded":true})
}
catch (err){
res.send(err)
}
})

app.post('/filteremp', async(req,res)=>
 {
    let gender = req.body.gender
    
    try{
        await newEmpData.save()
        res.json({"status":"success","NewEmpAdded":true})
    }
    catch (err){
    res.send(err)
    } 
    
    
})


app.post('/deleteemp', async(req,res)=> {
    let id = req.body.id

    try{
        await studentSchema.findByIdAndDelete(id)
        res.json({"status":"success", "id":id, "Deleted": true})
    }
    catch(err){
        res.send(err)
    }
    
})

app.post("/updateemp", async (req, res) => {
 
let id = req.body._id;
let name = req.body. name
let registernumber = req.body.registernumber
let gender = req.body.gender
let school = req.body.school
let location=req.body.location
let email = req.body.email
let address = req.body.address
let mark= req.body.mark
  
    try {
      await studentSchema.findByIdAndUpdate(id,
         {

        // name: name,
        // location: location,

          "name":name,
          "registernumber":registernumber,
          "gender":gender,
          "school":school,
          "location":location,
          "email":email,
          "address":address,
          "mark": mark

      });
  
      res.json({ status: "success", UpdateEmp: true });
    } catch (err) {
      res.send(err);
    }
  });
  
  

  
 app.listen(5000,()=>{
     console.log("server started  succesfully");
 })