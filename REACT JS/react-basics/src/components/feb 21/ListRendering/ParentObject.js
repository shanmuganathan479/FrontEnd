import React from 'react'
import ChildObject from './ChildObject'
function ParentObject() {
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
    
    const mobilePrint = mobileSpecs.map(
        mobile => <ChildObject key={mobile.name} mobile={mobile }/>)
   
  return (
    <div>
        <h1>Parent object</h1>
        {mobilePrint}
    </div>
  )
}

export default ParentObject