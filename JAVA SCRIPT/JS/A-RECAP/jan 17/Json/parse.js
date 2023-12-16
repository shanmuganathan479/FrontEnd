// convert string to object
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

const data1=JSON.stringify(data)

console.log(data1)


//if u want to get individual value u need to parse
console.log("Parsing---------------------------------")
const data2= JSON.parse(data1)
console.log(data2)
console.log(data2.firstname)
console.log("reviewer parameter---------------------------------")

JSON.parse('{"1": 1, "2": 2, "100": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key);
  // return value;
});
