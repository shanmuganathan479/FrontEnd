import React, { Component } from 'react'

export class Counter2 extends Component {
  render() {
    const {count,handleCounter}=this.props

    return (
      <div>
        <h1>Counter2</h1>
        <button onClick={handleCounter}>Click me {count} tyms</button>
      </div>
    )
  }
}

export default Counter2