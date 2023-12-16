import React,{useState,useEffect} from 'react'

function InCorrectDependecy() {

    const [count,setCount]=useState(0);
     
    const tick=()=>{
         setCount(count+1)
    }
    useEffect(()=>{

        //function
        //function call()
      setInterval(tick,1000)
      // Every tyms it calls the tick method
    },
    // [count]
    []
    )
    // We need to specify the state dependency here [count] then only it works perfectly 
  return (
    <div>
        <h1>InCorrectDependecy</h1>
        <h1>Automatic counter ={count}</h1>
        <h3 className='note'>Note :- If u use function call inside tghe useEffect u have to define function also inside the useEffect</h3>

        <h3 className='note'>For differeent side Effects we can use multiple useEffect</h3>

    </div>
  )
}

export default InCorrectDependecy