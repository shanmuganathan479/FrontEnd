const factorialNumber = (num) => {
  let factorial = 1;
  for (let s = num; s > 0; s--) {
    factorial *=  s;
  }
  return factorial;
};
console.log(factorialNumber(7));
