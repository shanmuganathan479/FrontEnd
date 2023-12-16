import React, { Component } from 'react'
import UpdatedComponent from './Hoc'

 class Hover extends Component {

  render() {
    const {count,handleCounter} = this.props
    return (
      <div>
        <h1>Hover</h1>
        <h2 onMouseOver={handleCounter}>Hover me and see the count {count}</h2>
      </div>
    )
  }
}
export default UpdatedComponent(Hover,5)