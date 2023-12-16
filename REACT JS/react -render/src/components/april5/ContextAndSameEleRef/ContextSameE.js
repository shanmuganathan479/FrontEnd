import React from 'react'

const ContextSameE = () => {
  return (
    <div>
        <h1>Context SameElement Reference</h1>
        <h2 className='note'>Another way to prevent from render. Please, go throgh the previous example</h2>
        <ol>
          <li>App.js wrap the child with parent</li>
          <li>parent use the children prop and render it</li>
          <li>Immediate child should ne memoized</li>
        </ol>
    </div>
  )
}

export default ContextSameE