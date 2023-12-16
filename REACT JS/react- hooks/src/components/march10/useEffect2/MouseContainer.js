import React,{useState} from 'react'
import { UseEffectOnlyOnce } from './UseEffectOnlyOnce';

function MouseContainer() {
    const[hide,setHide]=useState(true);

    const handleHide=()=>{
        setHide(false)
    }
  return (
    <div>
        <h1>MouseContainer</h1>
        <button onClick={handleHide}>Hide</button>
        {
          hide ? <UseEffectOnlyOnce/> : null
        }
    </div>
  )
}

export default MouseContainer