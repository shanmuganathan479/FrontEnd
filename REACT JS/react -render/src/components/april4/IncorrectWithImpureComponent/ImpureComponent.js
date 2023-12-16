import React from 'react'
import Parent4 from './Parent4'

const ImpureComponent = () => {
  return (
    <div>
        <h1>Incorrect optimization inImpureComponent </h1>
        <Parent4/>
    </div>
  )
}

export default ImpureComponent