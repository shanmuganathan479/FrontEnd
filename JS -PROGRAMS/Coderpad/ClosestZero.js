function ClosestToZero(numbers) {
  if (!numbers.length) {
    return 0;
  }
  const negative = [];
  const positive = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negative.push(numbers[i]);
    } else {
      positive.push(numbers[i]);
    }
  }
  const closestNegative = negative.sort(function (a, b) {
    return b - a;
  });

  const closestPositive = positive.sort(function (a, b) {
    return a - b;
  });

  if (closestPositive[0] == Math.abs(closestNegative[0])) {
    return closestPositive[0];
  } else {
    return closestNegative[0]
  }
}

// let items = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2, 7];
let items = [5, 6, 7, 9 , 2, - 2];

// let items = [0,-6,5.5,9,6,-8,-5.5,-1.3,-1.5,88,1.2,1.3]
// let items =[6,4.44,55,88,243,111,0.4,38843]
console.log(ClosestToZero(items));


//  1.7 0   9 