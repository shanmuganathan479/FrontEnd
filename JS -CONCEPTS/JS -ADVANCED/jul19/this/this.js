// This keyword used in the function it refers to objects belongs to
// it makes reusable code by letting u decide object value
// this value is determined how the function is called

// How to determine this ?
// Implicit binding
// Explicit binding
// Default binding
// New binding

// Implicit binding

console.log("Implicit binding--------------------------");
const data = {
  name: "shan",
  nickName: function () {
    return `Nickname is ${this.name} stark`;
    //     Here it refers to data.name => this.name
  },
};

console.log(data.nickName());

// Explicit binding
console.log("Explicit binding--------------------------");
// We are calling another function object here with method call()
function secondNickname() {
  return `Second nick name hesha ${this.name}`;
}

console.log(secondNickname.call(data));


// New binding
console.log("New binding-------------------------------")

globalThis.name = "I am IronMan"
function newName(name){
    // Every tym the new keyword this.name={}
   this.name = name
}
const n1 = new newName("shan")
const n2 = new newName("vanmeki")

console.log(n1.name)
console.log(n2.name)


//  Default binding
console.log('Default binding---------------------------')

console.log(secondNickname())
// here this is undefined it will try default binding if above 3 are not applied
// consider that secondNickname()

// order of precedence
// new
// explicit
// implicit
//  default