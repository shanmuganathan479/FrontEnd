const fibonacci = (num) => {
  let val,
    n1 = 0,
    n2 = 1;
  for (let i = 1; i <= num; i++) {
    console.log(n1);
    val = n1 + n2;
    n1 = n2;
    n2 = val;
  }
};
console.log(fibonacci(10));
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,.
