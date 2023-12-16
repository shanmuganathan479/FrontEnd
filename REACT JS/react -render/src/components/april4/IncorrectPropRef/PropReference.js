import React from 'react'
import Parent5 from './Parent5'

const PropReference = () => {
  return (
    <div>
        <h1>Incorrect memo with PropReference</h1>
        <h2>Scenerios</h2>
        <h3>1)Object as props</h3>
        <h3>2)Function as props</h3>
        <Parent5/>
    </div>
  )
}

export default PropReference