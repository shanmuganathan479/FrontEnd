import React, { Component } from 'react'

export default class EventHandlingCLass extends Component {

    handleClick(){
        console.log("Class comp button clicked")
    }
  render() {
    return (
      <div>
        <h1>Event handling in Class component</h1>
        <button onClick={this.handleClick}>Class Component</button>
        {/* Rules
        eventHandlers should be => camelCase
        eventHandlers are function not a functional call */}
      </div>
    )
  }
}
