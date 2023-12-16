import React, { useState } from 'react'

const UpdatingScreenFunc = () => {

  const [change, setchange] = useState(false)

      // state, method                intialValue


      const handleClick =()=>{
         alert ("Hey... welcome back")
         setchange(true)
      }
     
  return (
    <div>
        <h1>Updating screen</h1>
        <h2>Updating Screen Function based</h2>
        <h3>Through changing state</h3>

        <button onClick={handleClick}>Login</button>
        {
          change ? <h1>Hey User</h1> : <h2>Please Login</h2>
        }
       
    </div>
  )
}

export default UpdatingScreenFunc