  // var data = {
  //   name: "Ankit",
  //   age: 24,
  //   workingDay: ["Mon", "Tue", "Wed", "Thu", "Fri"]
  // };
  
  // for (const key in data) {
  //   if (data.hasOwnProperty(key)) {
  //     const element = data[key];
  //       console.log(key+": ", element);
  //   }
  // }

//   var json = {
//     one: [11, 12, 13, 14, 15],
//     two: [21, 22, 23],
//     three: [31, 32]
//  }
 
//  for(var key in json.jsonData) {
//     for (var key1 in json.jsonData[key]) {
//         console.log(json.jsonData[key][key1])
//     }
//  }

//   var json = {
//   jsonData:  [
//       {one: [11, 12, 13, 14, 15]},
//       {two: [21, 22, 23]},
//       {three: [31, 32]}
//   ]
// }; 
// for (var i=0; i<json.jsonData.length; i++) {
//   for (var key in json.jsonData[i]) {
//       for (var j= 0; j<json.jsonData[i][key].length; j++) {
//           console.log(json.jsonData[i][key][j])
//       }
//   }
// }

const mobiles = [
  {
      brand: 'Samsung',
      model: 'Galaxy Note 9'
  },
  {
      brand: 'Google',
      model: 'Pixel 3'
  },
  {
      brand: 'Apple',
      model: 'iPhone X'
  }
];

mobiles.forEach(mobile => {
  // for (let key in mobile) {
  //     console.log(`${key}: ${mobile[key]}`);
  // }
  console.log((mobile))
});