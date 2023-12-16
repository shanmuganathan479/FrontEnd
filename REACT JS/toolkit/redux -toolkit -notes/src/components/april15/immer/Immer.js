import React from 'react'

const Immer = () => {
  return (
    <div>
        <h1>Immer</h1>
        <h3>Efficiently handling immutable data structures works very well in with redux</h3>
        <ol>
            <li>npm i immer</li>
            <li>import immer with produce</li>
            <li>return produce(state,(draft)=(draft.object.childObject = action.payload))</li>
        </ol>
    </div>
  )
}

export default Immer