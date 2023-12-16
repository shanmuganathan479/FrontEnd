import React,{useState} from 'react'
import useDocTitle from './useDocTitle'

function DocTitle2() {

    const [count,setCount] = useState(0)

    useDocTitle(count)
  return (
    <div>
        <h1>DocTitle2</h1>
        <button onClick={()=>setCount(count + 1)}>click = {count}</button>
    </div>
  )
}

export default DocTitle2