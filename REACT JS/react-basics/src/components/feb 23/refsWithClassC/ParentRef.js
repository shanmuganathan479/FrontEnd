import React, { Component } from 'react'
import RefWithClassC from './RefWithClassC'

export default class ParentRef extends Component {
    constructor(props) {
        super(props)
      
        this.componentRef = React.createRef()
      }
      handleClick=()=>{
        this.componentRef.current.focusInput()
      }
  render() {
    return (
      <div>
        <h1>ParentRef</h1>
        <button onClick={this.handleClick}>Focus Input</button>
        <RefWithClassC ref={this.componentRef}/>
      </div>
    )
  }
}
