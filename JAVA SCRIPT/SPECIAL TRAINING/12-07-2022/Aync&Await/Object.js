const shan={
    "id": 5,
    "firstname": "heshana",
    "lastname": "s",
    "email": "hesha@gmail.com",
    "password": "shan3348",
    "phonenumbeer": "7733551122",
    "status": "active"
  }



  //for in

  for(var value in shan)
  {
    const ak=async()=>{
       await console.log(value+":"+shan[value])
        
    }
    ak();

  }

  //for of 
  
  for (const entry of Object.entries(shan))
  {
     const hemmu=async()=>{

     await  console.log(`${entry[0]}=> ${entry[1]}`)
     }
     hemmu();

  }


  

