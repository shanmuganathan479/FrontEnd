import React,{useMemo, useState} from 'react'

const DoubleCounter = () => {
    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setcounterTwo] = useState(0)
    
    const handleCounterOne=()=>{
        setcounterOne(prev => prev+1)
    }

    const handleCounterTwo=()=>{
        setcounterTwo(prev=>prev+1)
    }
    // const isEven=()=>{
    //   let i = 0
    //   while(i< 2000000000) i++
    //   return counterOne%2
    // }
   
    const isEven=useMemo(()=>{
      console.log("UseMemo function")
      let i = 0
      while(i< 2000000000) i++
      return counterOne%2
    },[])


  return (
    <div>
        <h1>UseMemo</h1>
        <h2>DoubleCounter</h2>
        <button onClick={handleCounterOne}>Counter1 -{counterOne}</button>

        {/* {isEven() ? "Even" : "Odd"} */}
        {/* For Normal function */}


        {isEven ? "Even" : "Odd"}
        {/* UseMemoFunction */}

        <br/>
        <button onClick={handleCounterTwo}>Counter2 -{counterTwo}</button>

    </div>
  )
}

export default DoubleCounter