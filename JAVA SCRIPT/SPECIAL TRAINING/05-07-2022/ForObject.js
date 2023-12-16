var data= {
    "id": 5,
    "firstname": "heshana",
    "lastname": "s",
    "email": "hesha@gmail.com",
    "password": "shan3348",
    "phonenumbeer": "7733551122",
    "status": "active"
  }

  //values only
  //console.log(Object.values(data));


//particular
//   console.log(data["id"])


// forin
//   for(var value in data)
//   {
//    console.log(value +":"+data[value])
//   }


for(const entry of Object.entries(data))
{
    console.log(`${entry[0]}=>${entry[1]}`)

}

for(const key of Object.keys(data))
{
    console.log(`${key}=>${data[key]}`)

}