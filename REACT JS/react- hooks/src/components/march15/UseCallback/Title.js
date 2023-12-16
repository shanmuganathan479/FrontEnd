import React, { useState,useCallback } from 'react'
import Count from './Count'
import Button from './Button'

function Title() {

    const [age,setAge] = useState(22);
    const [salary,setSalary] = useState(2000);
     
    const handleAge=useCallback (()=>{
        setAge(prev => prev + 1)
    },[age])
    
    const handleSalary=useCallback( ()=>{
            setSalary(prev => prev + 1000)
        },[salary])
  return (
    <div>
        <h1>useCallback</h1>
        <h3 className='note'> here i reused the component ,for any click it will render the all component</h3>

        <Count text ="Age"state={age}/>
        <Button event={handleAge}>IncrementAge</Button>

        <Count text ="Salary"state={salary}/>
        <Button event={handleSalary}>IncrementSalary</Button>
        
    </div>
  )
}

export default Title