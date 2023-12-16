const user=
[
    {name:"shan",age:"22",college:"EGSPEC"},
    {name:"mei",age:"25",college:"EGSPEC"},
    {name:"unna",age:"25",college:"EGSPEC"},
    {name:"mirshat",age:"22",college:"EGSPEC"},
    {name:"rajubhai",age:"25",college:"EGSPEC"},
    {name:"vino",age:"25",college:"EGSPEC"},
    {name:"vikram",age:"22",college:"EGSPEC"},
    {name:"karnan",age:"25",college:"EGSPEC"},
    {name:"sandhanam",age:"25",college:"EGSPEC"},
    {name:"rolex",age:"22",college:"EGSPEC"},
    {name:"amar",age:"25",college:"EGSPEC"},
    {name:"bejoy",age:"25",college:"EGSPEC"}

]

const p1=new Promise((resolve,reject)=>
{
  if(user.length<=15)
  {
   resolve("You guyz are 12")
  }
  else
  {
     reject("i could not guess")
  }

})
p1.then(console.log()).catch(console.log())