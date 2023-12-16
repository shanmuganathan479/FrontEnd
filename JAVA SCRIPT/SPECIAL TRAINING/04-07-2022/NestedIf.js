


// if(shan<=10)
// {
//     console.log("You are a baby")  
// }  

// else if(shan<=3)
// {
//     console.log("You are a fetus")      
// }
// else if(shan>=10)
// {
//     console.log("you are a boy")  
// }

//  else
//  {
//     console.log("you are not in the list")
//  }

var shan=22
const x =()=>
{
 return(shan<=3) ? console.log("You are a fetus")  
  : (shan<=10) ?console.log("You are a baby") 
  : (shan<=20) ?console.log("You are a boy") 
  :console.log("you are not in the list");
}
x();
