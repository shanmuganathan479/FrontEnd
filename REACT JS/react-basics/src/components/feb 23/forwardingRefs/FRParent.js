import React, { Component } from 'react'
import FRInput from './FRInput'

export default class FRParent extends Component {
        
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }
    handleClick =()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <h1>Forwarding Ref Parent</h1>
        <button onClick={this.handleClick}>Click me</button>
        <FRInput ref={this.inputRef}/>
      </div>
    )
  }
}
