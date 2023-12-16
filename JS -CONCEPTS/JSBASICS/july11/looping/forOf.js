// used to loop through collection of data
// example - array, string ,map, set, nodeLists

console.log("Loop through strings-------------------------");
const shan = "shanmuganathan";

for (let sha of shan) {
  console.log(sha);
}

console.log("Loop through Array---------------------------");
const lap = ["dell", "hp", "mac", "lenovo", "acer"];

for (let key of lap) {
  console.log(key);
}

// OBJECTS
console.log("Loop through objects ------------------------");

// const specs = {
//   mobile: "sony xperia 5 iii",
//   price: 25000,
//   processor: "SD 865",
// };

// for(let key  of specs){
//    console.log(key,specs[key])
// }

// we can't iterate object