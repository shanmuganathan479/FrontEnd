import React,{useState} from 'react'
import MouseTracker from './MouseTracker'

const MouseTrackerContainer = () => {
    const [hide, sethide] = useState(true)

    const handleShow=()=>{
        sethide(false)
    }
  return (
    <div>
        <h2>MouseTrackerContainer</h2>
        <button onClick={handleShow}>Stop the processs</button>
        {
            hide && 
        <MouseTracker/>
        }
    </div>
  )
}

export default MouseTrackerContainer