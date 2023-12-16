const find = (nums) => {
  nums.forEach((element) => {
    if(element%2 !== 0){
        element*=3
    }
  });
  return nums;
};

console.log(find([1, 2, 3, 4, 5]));
