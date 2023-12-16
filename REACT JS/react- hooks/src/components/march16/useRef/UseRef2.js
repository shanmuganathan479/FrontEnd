import React,{useState,useEffect,useRef} from 'react'

function UseRef2() {
    
    const [timer,setTimer] = useState(0);
    const refTimer = useRef()

    useEffect(()=>{
       refTimer.inputTimer = setInterval(() => {
        setTimer(prev => prev + 1)
       }, 1000);
       return()=>{
        clearInterval(refTimer.inputTimer)
       }
    },[])
  return (
    <div>
        <h1>UseRef2</h1>
        <h2>Timer - {timer}</h2>

        {/* <button onClick={()=>clearInterval(inputTimer)}>Stop</button> */}

        <button onClick={()=>clearInterval(refTimer.inputTimer)}>Stop</button>
    </div>
  )
}

export default UseRef2