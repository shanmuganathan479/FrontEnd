import {useState} from 'react'

function useInput(initVal) {
  const[value,setValue] = useState()

  const bind={
    value, 
    // value={value}
    onChange:(e)=>{
      setValue(e.target.value)
      
    }
    //onChange 

    // Form la ulla value + onchange
  }

  const reset =()=>{
    setValue(initVal)
  }

  return[value,bind,reset]
}

export default useInput