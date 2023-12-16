import React,{useState} from 'react'

const UseState = () => {

    const [count, setCount] = useState(0)
    
    const handleIncre=()=>{
        setCount(prev => prev+1)
    }
    const handlereset=()=>{
        setCount(0)
    }
    const handleIncre100=()=>{
        setCount(100)
    }

    console.log("UseState Re-render")
  return (
    <div>
        <h1>1)UseState</h1>
        <h1>Count {count}</h1>

        <h3 className='note'>Always 1 Intial Re-render</h3>

        <button onClick={handleIncre}>Increment</button>
        <br/>

        <h3 className='note'>If the value changes it cause Re-render</h3>
        <button onClick={handlereset}>Reset</button>

        <h3 className='note'>If value is not change it won't re-render</h3>

        <br/>
        <button onClick={handleIncre100}>Increment100</button>
        <h3 className='note'>If we set some particular value it executes intial Re-render + value change Re-render , After one  Re-render Totally = 3</h3>

        <ol>
            <li>set state from a Hook cause Re-render</li>
            <li>Exception is update the same value of current state</li>
            <li>same value after intial render, won't Re-render</li>
            <li> Same value after Re-render render the specific component and one more tym (2) then bails oout from render</li>
        </ol>
    </div>
  )
}

export default UseState