import React from 'react'
import { Parent3 } from './Parent3'

export const InCorrectMemo = () => {
  return (
    <div>
        <h1>InCorrectMemo with Children</h1>
        <h2 className='note'>If child component has children element props . we don't need to use memo</h2>
        <Parent3/>
    </div>
  )
}
