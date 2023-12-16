import React from 'react'

const ObjectExample = () => {

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

    const mobileList = mobileSpecs.map((mobile)=>{
      return <li key={mobile.name}> Mobile is {mobile.name} Mobile Price is {mobile.price}</li>
    })
  return (
    <div>
        <h2>ObjectExample</h2>
       {mobileList}
    </div>
  )
}

export default ObjectExample