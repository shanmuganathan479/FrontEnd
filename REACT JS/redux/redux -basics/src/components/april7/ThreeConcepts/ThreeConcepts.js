import React from 'react'

const ThreeConcepts = () => {
  return (
    <div>
        <h1>ThreeConcepts</h1>
        <ol>
            <li>Store</li>
            <li>Action</li>
            <li>Reducer</li>
        </ol>
        <h2 className='note'>Store</h2>
        <h3>Holds the state of ur applications</h3>
        <h2 className='note'>Action</h2>
        <h3>Changes in state of ur applications</h3>
        <h2 className='note'>Reducer</h2>
        <h3>Carries out the state based on action</h3>
    </div>
  )
}

export default ThreeConcepts