import React, { Component } from 'react'

export default class RefWithClassC extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef(); 
    }

    focusInput (){
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div>
        <h1>RefWithClassC</h1>
        <input ref={this.inputRef}></input>
      </div>
    )
  }
}
