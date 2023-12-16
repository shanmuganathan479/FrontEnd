let arr = [{
    name: "aaa",
    inputs: [{
      inputName: "input-1",
      groups: [{
        groupName: "group-a"
      }]
    }]
  }, {
    name: "bbb",
    inputs: [{
      inputName: "input-2",
      groups: [{
        groupName: "group-b"
      }]
    }]
  }];

  newArr = [] 
arr.map( element =>{
    console.log( element )
    newArr.push( element.inputs[0].groups[0].groupName  )
})

console.log( newArr , "newArr"  )