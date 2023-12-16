const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    registernumber:
    {
        type:Number,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    school:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    } 
    ,
    mark:
    {
        type:Number,
        require:true,
    }

})
const model = mongoose.model("detail",studentSchema)
module.exports=model



