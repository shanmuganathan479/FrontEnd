const str = "hackthegame";

// 1)spiliting
const seperate = str.split("");
// console.log("split=>",seperate)

// 2)removing duplicates
const val1 = new Set(seperate);
// console.log(val1)

//3) joining values
const val2 = [...val1].join("");

console.log(val2);
