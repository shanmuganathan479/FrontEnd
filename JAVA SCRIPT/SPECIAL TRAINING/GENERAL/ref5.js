const myArray = [{x:100}, {x:200}, {x:300}];

const newArray= myArray.map(element => {
    return {
        ...element,
        x: element.x * 2
    };
});

console.log(myArray);

 console.log(newArray); 
