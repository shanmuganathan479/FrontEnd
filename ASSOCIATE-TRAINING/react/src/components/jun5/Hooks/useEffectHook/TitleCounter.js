import React,{useState,useEffect} from 'react'

const TitleCounter = () => {
    const [count, setcount] = useState(0)
    const [name, setname] = useState("")

    useEffect(()=>{
        console.log("Document title updated")
        document.title = `You clicked ${count} times`
        // Side Effects

        // In class component we need to write same code in different placw
    },[count])
    // Dependancy Only execute when the prop or state change

    const handleIncrement=()=>{
        setcount(prev=> prev+1)
    }

    const handleChange=(e)=>{
       setname(e.target.value)
    }

  return (
    <div>
        <h1>UseEffect</h1>
        <h2>TitleCounter - {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <input type='text'  value={name} onChange={handleChange}/>
    </div>
  )
}

export default TitleCounter