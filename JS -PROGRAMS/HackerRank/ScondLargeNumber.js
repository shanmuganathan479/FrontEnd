function getSecondLargest(nums) {
  const order = nums.sort(function (a, b) {
    return a - b;
  });
  //   return order[order.length-2]
//   console.log(order)

//   if (order[order.length - 1] === order[order.length - 2]) {
//     return order[order.length - 3];
//   } else {
//     return order[order.length - 2];
//   }
// const removeDuplicates = new Set(order)
// // console.log(removeDuplicates)
// return removeDuplicates

const removeDuplicates = order.filter((item,index,array)=>{
   return array.indexOf(item) == index 
})

return removeDuplicates[removeDuplicates.length -2]

}


// console.log(getSecondLargest([2, 3, 6, 6, 5]));
// console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]));
// console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

