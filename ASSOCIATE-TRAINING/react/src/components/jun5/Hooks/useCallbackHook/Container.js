import React, { useCallback, useState } from 'react'
import Button from './Button'
import Display from './Display'


const Container = () => {
     const [exp,setExp] = useState(1)
     const [salary,setSalary] = useState(20000)


     const handleExp=useCallback(()=>{
        setExp(prev=>prev+1)
     },[exp])

     const handleSalary=useCallback(()=>{
        setSalary(prev=>prev+5000)
     },[]
)
    console.log("Container")
  return (
    <div>
        <h1>UseCallback -{exp}</h1>

        <Display text="Experience" exp={exp}/>
        <Button event={handleExp}>Increment Experience</Button>

        <Display text="Salary" exp={salary}/>
        <Button event={handleSalary}>Increment Salary</Button>
        
    </div>
  )
}

export default Container