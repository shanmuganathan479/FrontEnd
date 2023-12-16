const swap1 = (a, b) => {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return `A is${a} B is${b}`;
};

console.log(swap1(10, 20));


const Swap2=(a,b)=>{
  [a,b]=[b,a]
  return `A is ${a} B is${b} `
}

console.log(Swap2(33,48))