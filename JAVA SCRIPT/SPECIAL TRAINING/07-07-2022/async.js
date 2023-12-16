
// Normal function 

function shan1()
{
    return "This is shan 1"
}

console.log(shan1())


// returning promise

function shan2()
{
    return Promise.resolve("This is shan 2")
}

console.log(shan2())



// async 

async function shan3()
{
    return "This is shan 3"
}
// //Using then
// shan3().then((data)=>{
  
//     console.log(data)
// })

console.log(shan3())



//await

async function shan4()
{
console.log("====================Await work flow")
const response =await shan1() ;
console.log(response)
const response2 =await shan2();
console.log(response2)
}
shan4();
