import React from 'react'
import Child from './BikeRender'

const Parent = () => {
  return (
    <div>
        <h2>Parent component Helps to create reusable component</h2>
        <h2>Child component</h2>
        <Child bike="R15"/>
        <Child bike="R3"/>  
        <Child bike="R6"/>
        <Child bike="R7"/>
        
        {/* Resuablity */}
        {/* Nesting */}
    </div>
  )
}

export default Parent
