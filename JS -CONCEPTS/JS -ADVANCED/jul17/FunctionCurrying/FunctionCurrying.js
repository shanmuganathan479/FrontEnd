// Function Currying
// Currying is the process in functional programming transform a function with multiple argumets into sequence of nesting function that takes only one arguments at a time
// function(a,b,c) => function((a)(b)(c))

const sum = (a, b, c) => {
  return a + b + c;
};
console.log(sum(1, 2, 3));
// sum(1,2,3) we need to convert => sum(1)(2)(2)

console.log("Currying----------------------------");

function curry(val) {
  return function first(a) {
    return function second(b) {
      return function third(c) {
        return val(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum)
// console.log(curriedSum(2)(5)(9))

const add5= curriedSum(5)
const add10= add5(10)
const add15= add10(15)

console.log(add15)

// usecase
// make HOC
// it reduces error by dividing into smaller parts
// reusable code
// it avoids pass the same variable multiple time
// Readable




