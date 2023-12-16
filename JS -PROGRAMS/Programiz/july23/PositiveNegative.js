const findSign = (number) => {
 if(number > 0){
    return "Number is positive"
 }else if(number === 0){
   return "Number is zero"
 } else{
    return "Number is negative"
 }
};

console.log(findSign(0));
