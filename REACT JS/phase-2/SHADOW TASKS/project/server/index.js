const exp=require('express');
const bodyparser=require('body-parser');
const cors =require('cors')

const app=exp();
app.use(cors());
app.use(bodyparser.json());
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

  

   app.post("/add",async(req,res)=>{
    console.log(req.body)
    console.log("gwguidgqwhuidhuiqwhidhiqwhduiqwgdqwbdbqbgguiqeugfuiegfuiegugfueb")

    let id=req.body.id
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let phonenumbeer=req.body.phonenumbeer
    let status = req.body.status
 
    detail.create({
    "id":id,
    "firstname":firstname,
    "lastname":lastname,
    "email":email,
    "password":password,
    "phonenumbeer":phonenumbeer,
    "status":status,

    })
    .then(
        data=>
        {
            console.log(data)
            res.send(data);
        }
       
        )
        .catch (
            function(err) {
                console.log(err);}
           )
           })  
 })
 
 app.post('/delete', async (req, res) => {

    let id = req.body.id
    detail.destroy({
        where: {
            "id": id,
               }
    }).then(
        data => {
            console.log(data);
            res.status(200).send((data).toString());
        }
    )    
    .catch(
            function (err) {
                console.log(err);
            }
        )
})

app.post('/update',  (req, res) => {
    let id = req.body.id
    let firstname = req.body.firstname
    let lastname = req.body.lastname
    let email = req.body.email
    let password = req.body.password
    let phonenumber = req.body.phonenumber
    let status = req.body.status
    detail.update({
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password,
        "phonenumber": phonenumber,
        "status": status,
    }

        , {
            where: {
                "id": id,
            }
        })
        .then(
            data => {
                console.log(data);
                res.status(200).send((data).toString());
            }
        )
        .catch(
            function (err) {
                console.log(err);
            }
        )
    })
