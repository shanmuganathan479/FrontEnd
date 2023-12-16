const exp=require('express');
const bodyparser=require('body-parser');
const cors =require('cors')

const app=exp();
app.use(cors());
const Sequelize=require("sequelize");

const sequel =new Sequelize("shan","postgres","1234",{
    host:"localhost",
    dialect:"postgres",
    define: {
        "timestamps": false
      }
});
const db={};
db.Sequelize=Sequelize;
db.sequel=sequel;

app.listen(5000,()=>{

    console.log("server started");
})

var detail=db.sequel.define("customers",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    firstname:{
        type:Sequelize.STRING

    },
    lastname:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING

    },
    password:{
        type:Sequelize.STRING

    },
    phonenumbeer:{
        type:Sequelize.INTEGER

    },
    status:{
        type:Sequelize.STRING

    },
    

});
db.sequel.sync().then(function(){
    console.log("sync");
});

app.get('/customers',async(req,res)=>{
    
  detail.findAll({}).then(
      data=>{
      console.log(data);
      res.send(data);
      }
  )
  .catch (
    function(err) {
        console.log(err);}
   )

  
    
 })
