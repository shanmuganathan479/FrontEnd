import React from 'react'

const ThreePrinciples = () => {
  return (
    <div>
        <h1>ThreePrinciples</h1>
        <ol>
            <li>All of ur state stored in global state</li>
            <li>The only way to change state to dispact action describe what happened</li>
            <li>To specify how state is transformed we write pure reducers</li>
        </ol>

    </div>
  )
}

export default ThreePrinciples