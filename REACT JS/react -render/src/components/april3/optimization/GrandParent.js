import React,{useState} from 'react'
import { Child1 } from './Child1'
import { Parent1 } from './Parent1'

export const GrandParent = () => {
    
    const [first, setfirst] = useState()
    console.log("Grant parent-1")
  return (
    <div>
        <h1>Same element reference (Optimization = prevent unneccsary render)</h1>
        <h2>GrandParent</h2>
        <button onClick={()=>setfirst(prev=>prev+1)}>Count {first}</button>

        <Parent1 setfirst={setfirst}>
            <Child1/>
        </Parent1>
    </div>
  )
}
