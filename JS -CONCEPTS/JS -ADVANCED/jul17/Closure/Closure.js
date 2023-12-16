// Closure

const counter = () => {
  let count = 0;
  const inner = () => {
    count++;
    console.log(count);
  };
  inner();
};

counter();
counter();
// Every consider new 


console.log("Another variation----------------------")


const outer = () => {
  let count = 0;
  const inner = () => {
    count++;
    console.log(count);
  };
  return inner
};

const counterApp =outer()
counterApp()
counterApp()

// it gives incremented values becoz of closure
//Closure 
// When we return functiom in another function with scope this will effectively hold the live data between executions . That combination of function and scope is called Closure
// Simple defination
// Inner function variable access the outer function variable