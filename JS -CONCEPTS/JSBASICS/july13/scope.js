// Accesablity of variable
//block scope
//function scope
//global scope

const bus = 33
const person = "tony"

console.log("Block scope ----------------------");
if (true) {
  const person = "shan";
  console.log(person);
  console.log("Globalscope inside block",bus)
}
// console.log(person)
// only accessible in that block
// Mostly we use let,const

console.log("Function scope-----------------------");

function name() {
  const person = "stark";
  console.log(person);
  console.log("Globalscope inside function",bus)

}
// console.log(person)
// The value scope is only within the function

name();

console.log("Global scope---------------------------")
console.log(bus)
console.log(person) 
// if we redecalre global scope variable updated will be taken