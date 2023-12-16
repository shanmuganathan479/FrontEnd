import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent: "This is Parent Component"
      }
    }

    handleClick =(child)=>{
            alert(`Helo ${this.state.parent} and args is ${child}`)
    }


  render() {
    return (
      <div>   
        <Child parentArgs={this.handleClick}/>
      </div>
    )
  }
}
