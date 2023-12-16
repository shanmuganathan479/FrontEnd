// return keyword stop the function and return the value

const usrname =(firstName,lastName)=>{
    return firstName+lastName
}

console.log(usrname("shan","stark"));


// syntax =>    return [expression]


function square(x) {
    return x * x;
  }
  const demo = square(3);
  console.log(demo)

// return statements

// return true
// return false
// return x+y
// return x
// return x+y/3


const statements=(x,y)=>{
    // return true
// return false
// return x+y
// return x
return x+y/3
}

console.log(statements(1,2))




// Automatic semicolon


const add=(a,b)=>{

    return a+b;   //correct way


}

console.log(add(5,5));

const addd=(a,b)=>{

    return
     a+b;   //incorrect way
}

console.log(addd(5,5));


const adddd=(a,b)=>{

    return (
        a+b
    )  //another correct way

}

console.log(adddd(5,5));



// if we use in loop it will stop the loop when its come to return keyword





  
  