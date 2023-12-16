// If the inside function uses the outside function variable without destroying it will create a closure

var dob =2000;
function name()
{
  let n= "shan"
   console.log("INSIDE FIRST FUNCTION")
   console.log("Name:"+n,"DOB:"+dob,)

  function age(){
    
    let a = 22
    console.log("INSIDE SECOND FUNCTION")
    console.log("Name:"+n,"DOB:"+dob,"Age:"+a)
  }

  age();

}

name();


// If inner function does not use a parent function variable the close won't create