const values = [50,50,0,10,45]

const findValues = values.filter((item,index,array)=>{
   return array.indexOf(item) !== index
})

console.log(findValues)