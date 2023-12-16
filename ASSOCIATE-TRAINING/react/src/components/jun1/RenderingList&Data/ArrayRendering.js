import React from 'react'

const RenderingList = () => {

    const mobiles =["Nokia","Samsung","Sony","iphone","htc","Blackberry"]
    
    const mobileList = mobiles.map((mobile,index) => <li key={index}>{mobile}</li>)
   

  return (
    <div>
        <h1>RenderingList & Displaying data</h1>
        <h3>To display list of items</h3>
        {mobileList}
    </div>
  )
}

export default RenderingList