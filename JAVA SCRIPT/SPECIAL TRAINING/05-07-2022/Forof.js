var data= {
    "id": 5,
    "firstname": "heshana",
    "lastname": "s",
    "email": "hesha@gmail.com",
    "password": "shan3348",
    "phonenumbeer": "7733551122",
    "status": "active"
  }

  
for(const entry of Object.entries(data))
{
    console.log(`${entry[0]}=>${entry[1]}`)

}



  var phones=["nokia","samsung","sony","iphone","htc","blackberry"]

  for(let key of phones)
  {
   console.log(key)
  }