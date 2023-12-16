import React,{useMemo, useState} from 'react'

function UseMemo() {

  const[one,setOne] = useState(0)
  const[two,setTwo] = useState(10)

  const handleOne=()=>{
    setOne(prev => prev + 1)
  }
  const handleTwo=()=>{
    setTwo(prev => prev + 10)
  }
   
  // const isEven=()=>{
  //   let i=0
  //   while(i <200000000) i++
  //   return one%2 === 0
  // }

  const isEven=useMemo(()=>{
    let i=0
    while(i <200000000) i++
    return one%2 === 0
  },[one])


  return (
    <div>
      <h1>UseMemo</h1>
      <h3 className='note'>youc can face delay on both buttons that's why we are going for = useMemo</h3>
    <button onClick={handleOne}>IncrementOne={one}</button>
    <span>{isEven ? "Even" : "Odd"}</span>
    <br/>
    <button onClick={handleTwo}>IncrementTwo={two}</button>
    <h3 className='note'> now u can see the perfomance in 2nd button</h3>
    </div>
  )
}

export default UseMemo