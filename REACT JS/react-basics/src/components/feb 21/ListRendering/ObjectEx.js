import React from 'react'

function ObjectEx() {

    const mobileSpecs=[
        {
          name :"Sony",
          price: 120000,  
        },
        {
            name :"Samsung",
            price: 100000,  
          },        {
            name :"Iphone",
            price: 180000,  
          },        {
            name :"1+",
            price: 50000,  
          },        {
            name :"Realme",
            price: 12000,  
          },
    ]
    
    const mobilePrint = mobileSpecs.map(mobile => 
    <p key={mobile.name}>Mobile is{mobile.name}
     Prize is {mobile.price}</p>)
   
  return (
    <div>
        <h1>Listing objects</h1>
        {mobilePrint}
    </div>
  )
}

export default ObjectEx