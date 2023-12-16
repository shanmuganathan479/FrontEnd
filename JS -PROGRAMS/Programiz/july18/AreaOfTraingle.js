const AreaOfTraingle=(base,height)=>{
const result = (base*height)/2
return result
}

console.log(AreaOfTraingle(4,6))


const AreaOfTraingle3Sides=(a,b,c)=>{
   const side = (a+b+c)/2
   const result  = Math.sqrt(side*(side -a )*(side -b)*(side - c)) 
   console.log(result)
}

AreaOfTraingle3Sides(3,4,5)