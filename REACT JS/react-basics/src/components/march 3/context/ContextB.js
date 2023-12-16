import React, { Component } from 'react'
import ContextC from './ContextC'
import UserContext from './UserContext'
export class ContextB extends Component {

    // static contextType= UserContext

  render() {
    return (
      <div>
        <h1>ContextB</h1>
        <h2>Context is {this.context}</h2>
        <ContextC/>
      </div>
    )
  }
}
ContextB.contextType = UserContext
export default ContextB