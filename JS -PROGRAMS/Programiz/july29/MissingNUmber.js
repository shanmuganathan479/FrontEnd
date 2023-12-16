const missingNumber = (arr) => {
  const n = arr.length + 1;
  const formula = (n * (n + 1)) / 2;

  const totalSum = arr.reduce((total,acc)=> total+acc )

  return formula-totalSum
};
console.log(missingNumber([1, 2, 4, 5, 6]));
