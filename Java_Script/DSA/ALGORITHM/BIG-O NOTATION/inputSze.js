const summation = (n) => {
    let sum = 0;  // 1 time

    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum    // 1 time
}

console.log(summation(4));

// 1) Big o notation always expressed in input size
// here n is input
//execution is 2 time
// so the terms of input is n+2

// 2) focusing big thing not small details
//  if n is 5566778899 
//  input size is 5566778899 +2
// here we can remove +2
//5566778899
// here n+2 ===> n

// another method
const summation2=(n)=> n*(n+1)
// here it will execute only once

console.log(summation2(10));  
