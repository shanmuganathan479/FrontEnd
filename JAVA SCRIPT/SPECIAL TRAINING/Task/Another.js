const Data= {
   Youtube:{

      "kind": "youtube#searchListResponse",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk\"",
      "nextPageToken": "CAUQAA",
      "regionCode": "KE",
      "pageInfo": {
        "totalResults": 4249,
        "resultsPerPage": 5
      },
      "items": [
        {
          "kind": "youtube#searchResult",
          "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw\"",
          "id": {
            "kind": "youtube#channel",
            "channelId": "UCJowOS1R0FnhipXVqEnYU1A"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "Eqa2nAAhHN0"
          }
        },
        {
          "kind": "youtube#searchResult",
          "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4\"",
          "id": {
            "kind": "youtube#video",
            "videoId": "IirngItQuVs"
          }
        }
      ]
    },
    Product:[
    {
      "_id": {
        "$oid": "5968dd23fc13ae04d9000001"
      },
      "product_name": "sildenafil citrate",
      "supplier": "Wisozk Inc",
      "quantity": 261,
      "unit_cost": "$10.47"
    }, 
    {
      "_id": {
        "$oid": "5968dd23fc13ae04d9000002"
      },
      "product_name": "Mountain Juniperus ashei",
      "supplier": "Keebler-Hilpert",
      "quantity": 292,
      "unit_cost": "$8.74"
    }, 
    {
      "_id": {
        "$oid": "5968dd23fc13ae04d9000003"
      },
      "product_name": "Dextromathorphan HBr",
      "supplier": "Schmitt-Weissnat",
      "quantity": 211,
      "unit_cost": "$20.53"
    }
    ]
    }

    
    // for(var key in Data)
    // {
    // //  console.log(key)  

    //  const value=Data[key]

    

    
    // }
     
//   for(const entry of Object.entries(Data))
// {
//     console.log(`${entry[0]}=>${entry[1]}`)

// }


// for (const key in Data.Youtube)
//  {
//   console.log(key)
//   console.log(`${key}: ${Data[key]}`);

//   for(const key in Data.Product)
//   {
//     console.log(`${key}: ${Data[key]}`);

//   }

//   console.log(Data[key])
// }


// for (const key in Data) {
//   if (Data.hasOwnProperty(key)) {
//       console.log(`${key}: ${Data[key]}`);
//   }
// }




// print all keys
// console.log(keys);



// keys.forEach((key, index) => {
//     console.log(`${key}: ${Data[key]}`);
// });


//     for(var key in Data)
//     {
//       console.log(key)
// Data.Youtube.items.map((v)=>{
//   console.log(v)
// })

// Data.Product.map((v)=>{
//   console.log(v)
// })
//     }



// Object.entries(Data).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`)
// });

// for (const [key, value] of Object.entries(Data)) {
//   console.log(`${key}: ${value}`);
// }




// for(var key in Data)
// {
// console.log(key)

// var values=Object.keys(Data[key])
// values.Youtube.map((v)=>{
//   console.log(v)
// })
// }




// ObjectValues = function(v, k){
//   if (typeof v == "object") {
//     for (var kp in v) {
//       if (Object.hasOwnProperty.call(v, kp)) {
//         ObjectValues(v[kp], k != undefined ? k + "." + kp : kp);
//       }
//     }
//   } else {
//     console.log(k + ":" + v);
//   }
// };


// for(key in Data.Youtube) 
// {
//   console.log(key, Data.Youtube[key]);
  
// }

// Data.Product.map((v)=>{
//   console.log(v)
// })





//   console.log("Youtube:")
//   for(key in Data.Youtube) 
// {
//   console.log(key, Data.Youtube[key],Data.Product.map((v)=>{
//     console.log(v)
//   }));
  
// }

// for (let [key, value] of Object.entries(Data)) {

//   console.log(Data[key])
//   console.log(Data[value])
  
// }



// for(var key in Data)
// {
//   console.log(key)

//   const value=Data[key]
 
// }


//partially

// for (var key in Data) {
//   for (var key2 in Data[key]) {
//     console.log(key+":", key2+":",Data[key][key2]);

//   }
// }





