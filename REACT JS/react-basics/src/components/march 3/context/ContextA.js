import React, { Component } from 'react'
import ContextB from './ContextB'
export class ContextA extends Component {
  render() {
    return (
      <div>
        <h1>ContextA</h1>
        <h2>Steps to Use Context API</h2>
        <ol>
        <li>Create the Context</li>
        <li>Provide context value</li>
        <li>Consume the context value</li>
        </ol>

        <ContextB/>
      </div>
    )
  }
}

export default ContextA