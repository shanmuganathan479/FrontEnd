// converting values to JSON 
// Syntax => JSON.stringify(value,replacer,space)

var data= {
    id: 5,
    firstname: "heshana",
    lastname: "s",
    email: "hesha@gmail.com",
    password: "shan3348",
    phonenumbeer: 7733551122,
    status: 1
  }
    
  console.log(data)
var data1= JSON.stringify(data)
console.log("---------------------------------")
console.log("After stringify")
console.log("---------------------------------")
console.log(data1)
console.log(data1.firstname) // we need to parse for individual values


// ---------------------------------------------------- Replacer as function
function replacer(key,value)
{
  if (typeof value=== "string")
  {
   return undefined
  }
  return value
}

console.log("Replacer with function ")
console.log("---------------------------------")
var data2= JSON.stringify(data,replacer)
console.log(data2)

//---------------------------------------------------------------- Replacer as array

console.log("Replacer with array ")
console.log("---------------------------------")
var data3= JSON.stringify(data,["id"])
console.log(data3)


// ------------------------------------------------ space 

var data4= JSON.stringify(data,null,"\t")
console.log("---------------------------------")
console.log("space argument")
console.log("---------------------------------")
console.log(data4)