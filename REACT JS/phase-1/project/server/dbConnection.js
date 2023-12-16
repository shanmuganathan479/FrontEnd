const mongoose= require('mongoose')

const url="mongodb://localhost:27017/student"

mongoose .connect(url)


const conStatus=mongoose.connection

conStatus.on("open",()=>{
console.log("DB connected")
})