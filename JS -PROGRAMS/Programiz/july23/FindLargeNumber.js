const findLargeNumber=(num1,num2,num3)=>{
  const Numbers = []
  Numbers.push(num1,num2,num3)
  return Math.max(...Numbers)
}
console.log(findLargeNumber(33,48,99))