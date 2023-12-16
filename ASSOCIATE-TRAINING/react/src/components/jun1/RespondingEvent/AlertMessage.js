import React, { Component } from 'react'

export default class EventHandlingClassComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    handleClick(){
       alert("Hiii.................")
    }
    
  render() {
    return (
      <div>
        <h2>EventHandlingClassComp</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
