import React, { useState } from 'react'

const Fullname = () => {

    const [fullName, setFullName] = useState({firstName: "",lastName: ""})
    
    const handleFirstName=(e)=>{
       setFullName({...fullName,firstName: e.target.value})
    }
    const handleLastName=(e)=>{
        setFullName({...fullName,lastName: e.target.value})
     }
  return (
    <div>
        <h2>FullName</h2>

        <form>
        <input type='text' placeholder='FirstName' value={fullName.firstName} onChange={handleFirstName}/>
        <input type='text' placeholder='LastName' value={fullName.lastName} onChange={handleLastName}/>

        <h2>FirstName is {fullName.firstName} LastName is {fullName.lastName}</h2>
        <h2>{JSON.stringify(fullName)}</h2>
        </form>

    </div>
  )
}

export default Fullname