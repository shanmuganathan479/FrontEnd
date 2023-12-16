import React,{useState} from 'react'
// import { Child1 } from './Child1'

export const Parent1 = ({children}) => {

   const [count,setCount] = useState(0)
   
   console.log("Parent -1 ")
  return (
    <div>
        <h2>Parent1</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Count {count}</button>
        {/* <Child1/> */}
        {children}
    </div>
  )
}
