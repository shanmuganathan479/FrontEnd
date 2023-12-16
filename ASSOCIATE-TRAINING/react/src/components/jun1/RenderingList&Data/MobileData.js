import React from 'react'
import ChildObject from './MobileRender'
const ParentObject = () => {
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

    const specs = mobileSpecs.map(
        mobile => <ChildObject key={mobile.name} mobile={mobile}/>
    )

  return (
    <div>
        <h2>ParentObject</h2>
        {specs}
    </div>
  )
}

export default ParentObject