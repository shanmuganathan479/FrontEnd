import React,{useState} from 'react'
import useInput from './useInput'

function InputHook() {

    const [firstName,bindFN,resetFN]= useInput('')
    const [lastName,bindLN,resetLN]= useInput('')
         
    const handleSubmit=()=>{
       
        console.log(firstName,lastName)
         resetFN();
         resetLN();

         alert(`Hello ${firstName+lastName}`)
    }
  return (
    <div>
        <h1>Input Custom Hook</h1>

        <form onSubmit={handleSubmit}>
            <label>FirstName</label>
            <input type="text" {...bindFN}/>
            <br/>
            <label>LastName</label>
            <input type="text" {...bindLN}/>
              
            <br/>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default InputHook