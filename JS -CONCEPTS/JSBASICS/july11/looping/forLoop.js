//Syntax

// for(intialiazation ; condition ; finalExpression - increment/decrement){

// }
console.log("For loop example ----------------------");
for (let s = 0; s <= 10; s++) {
  console.log(s);
}

// let var in loop
// let wont redeclare a variable
// var will redeclare a variable

console.log("Var in for loop----------------");

var h = 5;

for (var h = 6; h <= 10; h++) {
  console.log(h);
}
console.log("Here var h is last upadted value", h);

console.log("Let in for loop----------------");

let f = 2;
for (let f = 7; f <= 10; f++) {
  console.log(f);
}

console.log("Here let f intiallially decalred variable ", f);

// Array
 
console.log("For loop with array------------------------")
const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log("For loop with objects --------------------------------------")

const data = {
  name: "shan",
  age: 23,
  native: "Tvr",
};

// for(let key in data){
//     console.log(key , data[key])
// }
// We can't iterate objects with for loop

