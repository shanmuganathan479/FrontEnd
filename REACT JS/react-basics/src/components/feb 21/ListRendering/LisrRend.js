import React from 'react'

function LisrRend() {

    const mobiles =["Nokia","Samsung","Sony","iphone","htc","Blackberry"]
    
    const mobileList = mobiles.map((mobile,index) => <p key={index}>{mobile}</p>)
   
  return (
    <div>
        <h1>List rendering</h1>
        <p>To display list of items</p>
        <h2>Normal way</h2>
        <div>{mobiles[0]}</div>
        <div>{mobiles[1]}</div>
          
        <h2>Map method</h2>
       {
        mobiles.map((mobile,index) => <p key={index}>{mobile}</p>)
       }
       <h2>For neat code</h2>
       {mobileList}
    </div>
  )
}

export default LisrRend