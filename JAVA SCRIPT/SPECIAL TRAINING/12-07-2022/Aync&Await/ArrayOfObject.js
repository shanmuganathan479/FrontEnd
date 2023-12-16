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

const details=[
    {name:"swathista",address:"unknown"}
]

 async function shan4()
{

console.log("====================Await work flow========================")
 await user.find((value)=>{
console.log(value)
})

console.log("data 2")
await details.find((v1)=>{
console.log(v1)
})
}
shan4();