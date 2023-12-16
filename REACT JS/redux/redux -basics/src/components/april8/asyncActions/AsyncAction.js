import React from 'react'

const AsyncAction = () => {
  return (
    <div>
        <h1>AsyncAction</h1>
        <h2 className='note'>API Calls</h2>

        <ol>
            <li>import redux</li>
            <li>create action</li>
            <li>create action creator (type: "", payload: "additionalDatas")</li>
            <li>create reducer( state,action) setState,setPayload data</li>
            <li>create store and pass reducer to that</li>
        </ol>
    </div>
  )
}

export default AsyncAction