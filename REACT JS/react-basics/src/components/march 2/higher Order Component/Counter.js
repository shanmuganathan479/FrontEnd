import React, { Component } from 'react'
import UpdatedComponent from './Hoc'

class Counter extends Component {

  render() {
    const {count,handleCounter,name} = this.props
       console.log(this.props.name)
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={handleCounter}> {name} count is {count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter,10) 
// if u sent the props u have to go the HOC sand the allprops using ... operator