import React, { Component } from 'react'

export class Hover2 extends Component {

  render() {
  const {count,handleCounter} = this.props

    return (
      <div>
        <h1>Hover2</h1>
        <h2 onMouseOver={handleCounter}>Hover me {count} Tyms</h2>
      </div>
    )
  }
}

export default Hover2