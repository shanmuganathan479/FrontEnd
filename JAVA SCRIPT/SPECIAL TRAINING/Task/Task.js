   const Hospital={
    "medications":[{
            "aceInhibitors":[{
                "name":"lisinopril",
                "strength":"10 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "antianginal":[{
                "name":"nitroglycerin",
                "strength":"0.4 mg Sublingual Tab",
                "dose":"1 tab",
                "route":"SL",
                "sig":"q15min PRN",
                "pillCount":"#30",
                "refills":"Refill 1"
            }],
            "anticoagulants":[{
                "name":"warfarin sodium",
                "strength":"3 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "betaBlocker":[{
                "name":"metoprolol tartrate",
                "strength":"25 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "diuretic":[{
                "name":"furosemide",
                "strength":"40 mg Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }],
            "mineral":[{
                "name":"potassium chloride ER",
                "strength":"10 mEq Tab",
                "dose":"1 tab",
                "route":"PO",
                "sig":"daily",
                "pillCount":"#90",
                "refills":"Refill 3"
            }]
        }
    ],
    "labs":[{
        "name":"Arterial Blood Gas",
        "time":"Today",
        "location":"Main Hospital Lab"      
        },
        {
        "name":"BMP",
        "time":"Today",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"BNP",
        "time":"3 Weeks",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"BUN",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Cardiac Enzymes",
        "time":"Today",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"CBC",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Creatinine",
        "time":"1 Year",
        "location":"Main Hospital Lab"  
        },
        {
        "name":"Electrolyte Panel",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"Glucose",
        "time":"1 Year",
        "location":"Main Hospital Lab"  
        },
        {
        "name":"PT/INR",
        "time":"3 Weeks",
        "location":"Primary Care Clinic"    
        },
        {
        "name":"PTT",
        "time":"3 Weeks",
        "location":"Coumadin Clinic"    
        },
        {
        "name":"TSH",
        "time":"1 Year",
        "location":"Primary Care Clinic"    
        }
    ],
    "imaging":[{
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        },
        {
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        },
        {
        "name":"Chest X-Ray",
        "time":"Today",
        "location":"Main Hospital Radiology"    
        }
    ]
}

  //working

//   for(var key in Hospital)
// {
//      console.log(key)

//      Hospital[key].map((v)=>{
//       console.log(v)  
//     })
// }


//for in
//  for (var key in Hospital)
// {

//  console.log(key+":")  
   
//   Hospital.medications.forEach((v)=>{
//     console.log(v);
//       }) 
//  console.log(Hospital[key])

// }


   //foreach
    // Hospital.medications.forEach((v)=>{
    // console.log(v);
    // })

    //   Hospital.labs.forEach((v2)=>{
    //     console.log(v2)
    //   })

    //   Hospital.imaging.forEach((v3)=>{
    //     console.log(v3)
    //   })


//individual
// console.log(Hospital.medications[0].aceInhibitors[0].name);

// console.log(Hospital.medications[0].betaBlocker[0].strength)


//map
 //console.log("medications:")

// Hospital.medications.map((v4)=>{
 
//     console.log(v4)
// })

// Hospital.imaging.map((v5)=>{
 
//     console.log(v5)
// })

// Hospital.labs.map((v6)=>{
 
//     console.log(v6)
// })





//ref

// for (const key in Hospital) {
//     if (Hospital.hasOwnProperty(key)) {
//       const element = Hospital[key];
//         console.log(key+": ", element);
//     }
//   }


//for each

//   Hospital.forEach(hosp => {
//     for (let key in hosp) {
//         console.log(`${key}: ${hosp[key]}`);
//     }
//   });


//map

// Hospital.medications.map((v)=>{

//     console.log("medications:",v)

//     Hospital.imaging.map((v2)=>{
//       console.log("imaging:",v2)   
//     })

//     Hospital.labs.map((v3)=>{
      
//         console.log("labs:",v3)
//       })

// })


//calling function

// const shan=()=>
// {
// Hospital.medications.map((v)=>{
//     console.log(v)
// })
// }

  
// const Hospital1=[]

// Hospital1.push(Hospital)

// //  console.log(Hospital1)

// Hospital1.map((v)=>{
//     console.log(v)
// })



//push

// for(var key in Hospital)
// {
//       console.log(key)

//      const NewHospital=[]
     
//      NewHospital.push((Hospital[key]))
//      console.log(NewHospital)

// }




//pushing key

//   for(var key in Hospital)
// {
//     //  console.log((Hospital[key]).map((v)=>{
//     //     console.log(v)
//     //  }))

//      let NewHospital=[]
//      NewHospital.push(Hospital[key])
//     //  console.log(NewHospital)
//     console.log(key+":"+NewHospital)
// }





//for of

//   for(const entry of Object.entries(Hospital))
// {
//     console.log(`${entry[0]}=>${entry[1].map((v)=>
//         {
//             console.log(v)
//         })}`)
// }





//pushing entire array


// for(var key in Hospital)
// {
//     // console.log(key)

//     const NewHospital=[]
    
//     NewHospital.push(Hospital)

//     //  console.log(NewHospital)
//      NewHospital.map((v)=>{
//         console.log(v)
//      })

// }


// for(var key in Hospital)
// {
//     // if (Hospital.hasOwnProperty(key)) {

//     //     console.log(`${key}: ${Hospital[key]}`);
//     // }



// }

//   const keys = Object.keys(Hospital);

// console.log(keys);

// keys.forEach((key, index) => {
//     console.log(`${key}: ${Hospital[key]}`);
// });
 
//async awaits

// const shan=async()=>{

//     for (let key in Hospital) {
//         await console.log(`${key}: ${Hospital[key].map((v)=>{
//              console.log(v)
//          })}`);
     
         
//      }    
// }
// shan();


// for(let key in Hospital)
// {
    
// console.log(key)+Hospital[key].map((v)=>{
//     console.log(v)
// })
// }



// for (var key in Hospital.messages) {
//     var obj = Hospital.messages[key];
//     console.log(obj)



  
// }console.log(obj)

// for (var key in Hospital) {
//     var arr = Hospital[key];
//     for( var i = 0; i < arr.length; i++ ) {
//         var obj = arr[ i ];
//         for (var prop in obj) {
//             if(obj.hasOwnProperty(prop)){
//                 console.log(prop + " = " + obj[prop]);
//             }
//         }
//     }
//  }


// Object.keys(Hospital).forEach((key)=>{
//     console.log(key,Hospital[key])
// })

// for(const [key,value] of Object.entries(Hospital))
// {
// console.log(`${key}: ${value}`)
// }




// for(var key in Hospital)
// {
// // console.log(key)

// // console.log(Hospital[key])

// const NewHospital=Object.values(Hospital)

// NewHospital.map((v)=>{
//     console.log(v)



// })
// }


//working 2

// for (let key in Hospital) {
//     let value = Hospital[key];
//     console.log(key);
//     for (i = 0; i < value.length; i++) {
//       console.log(value[i]);
//     }
//   }


  
  Object.keys(Hospital).forEach((v1)=>{
       
    console.log(v1)

    Object.keys(v1).forEach((v2)=>{

        console.log(v2)
    })



})