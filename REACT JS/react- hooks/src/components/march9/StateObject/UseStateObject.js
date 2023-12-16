import React,{useState} from 'react'

function UseStateObject() {

  const[name,setName]=useState({firstName:"",lastName: ""});

  //                            {objects}
  // But it can be a string,object,array,boolean,number

 const handleFirstName=(e)=>{
   setName({ ...name,firstName: e.target.value})
   //       For update the state manully
 }
 const handleLastName=(e)=>{
    setName({ ...name,lastName: e.target.value})
   //       For update the state manully

 }
  return (
    <div>
        <h1>UseState  with Object</h1>
        <input type="text" 
        onChange={handleFirstName}
        value={name.firstName}/>

        <br/>

        <input type="text" 
        onChange={handleLastName}
        value={name.lastName}/>

        <h3>First name is {name.firstName}</h3>
        <h3>Last name is {name.lastName}</h3>
        <h3>Stringify {JSON.stringify(name)}</h3>

        <h3 className='note'>Note:- Usestate doesn't merge the state and object We need to that manualy (... used this spread operator)</h3>
    </div>
  )
}

export default UseStateObject