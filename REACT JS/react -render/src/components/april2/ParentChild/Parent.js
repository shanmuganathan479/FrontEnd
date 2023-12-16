import React,{useState} from 'react'
import Child from './Child'

const Parent = () => {
    const [first, setfirst] = useState(0)

    console.log("Parent - render")
  return (
    <div>
        <h1>Parent Child</h1>

        <ol>
            <li>When parent re-render child also re-render</li>
            <li>New state is same to old state for the intial render . Both parent and child won't re-render </li>
            <li>New state is same to old state for the after re-render . parent re-render 1 more tym and child won't re-render</li>
        </ol>
        <h2>Parent</h2>

         <button onClick={()=>setfirst(prev => prev + 1)}>Count {first}</button>
         <button onClick={()=>setfirst(0)}>Count to 0</button>
         <button onClick={()=>setfirst(5)}>Count to 5</button>

        <Child/>
    </div>
    
  )
}

export default Parent