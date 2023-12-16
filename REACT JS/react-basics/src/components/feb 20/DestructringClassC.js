import React, { Component } from 'react'

export default class DestructringClassC extends Component {
  render() {

    const {name,age} = this.props

    // const {state1,state2} = this.state 

    // This is for state

    return (
      <div>
        <h1>In class component</h1>
        <h1>{name}, {age}</h1>
      </div>
    )
  }
}
