import React,{useState,useEffect} from 'react'

export const TitleCounter = () => {

    const[count,setCount]=useState(0)
    const [name,setName]=useState("")

    const handleCount=()=>{
        setCount(prev=>prev+1)
    }

    const handleChange=(e)=>{
       setName(e.target.value)
    }
    useEffect(()=>{
        console.log("Updating - title only")
        document.title=`You clicked ${count} tyms`
    },[count])

    // Telling the React only upadte for this state or prop

  return (
    <div>
        <h1>TitleCounter</h1>
        <button onClick={handleCount}>Look at the title {count}</button>
        <h3 className='note'>Note:- Here we did the side effects Title update for intial render and every update</h3>

        <h1>Conditionally Render</h1>
        <h3 className='note'>Note:- Open console window and see the useEffect rendering</h3>
        <input type="text" value={name} onChange={handleChange}></input>
    </div>
  )
}
