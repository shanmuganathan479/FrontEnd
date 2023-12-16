import React,{useState} from 'react'
import Child2 from './Child2'

function Parent2() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Shan")

  const handleName=()=>{
    setName("Stark")
  }
  console.log("Parent 2")
  return (
    <div>
        <h1>React memo (For unneccsary render)</h1>
        <h2>Parent2</h2>
        <button onClick={()=>setCount(prev => prev+1)}>Count{count}</button>
        <button onClick={handleName}>Change name</button>
        <Child2 name={name}/>
    </div>
  )
}

export default Parent2