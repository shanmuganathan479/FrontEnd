import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()

        this.state={
            message : "Hiiii click me"
        }
    }
    handleChange(){
        this.setState({
            message : "Hey you clicked"
        }
        )
            
        
    }
  render() {
    return (
      <div>
        <h1>State</h1>
        <button onClick={()=>this.handleChange()}>Click me</button>
        <h1>{this.state.message}</h1>
        <p>States are used to modify the value within the component</p>
      </div>
    )
  }
}
