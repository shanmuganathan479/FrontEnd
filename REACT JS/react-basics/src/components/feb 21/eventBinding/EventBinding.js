import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hi buddy"
      }
      this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(){
    //     this.setState({
    //         message: "get ready"
    //     })
    // }

    // For method 4
      handleClick=()=>{
        this.setState({
            message: "get ready"
        })
    }

  render() {
    return (
      <div>
        <h1>EventBinding</h1>
        <h2>{this.state.message}</h2>
        <p>We can't use this keyword in event handlers</p>
        <button onClick={this.handleClick}>problem look at the console</button>
        <br/>
        <button onClick={this.handleClick.bind(this)}>method1</button>
        <br/>
        <button onClick={()=>this.handleClick()}>method2</button>
        <br/>
        <button onClick={this.handleClick}>method3</button>
        <br/>
        <button onClick={this.handleClick}>method4</button>
        <ol>
          <li>Binding in render method</li>
          <li>Arrow function call in render ()</li>
          <li>Binding in constructor (React suggested)</li>
          <li>Class property as arrow function (React suggested)</li>
        </ol>
      </div>
    )
  }
}
