
const celsiusToFarenhit=(value)=>{
  const result= (value*1.8)+32
  return `${value} Celsius is ${result} in Farenhit`
}

console.log(celsiusToFarenhit(33))