import React, { Component } from 'react'

export default class Method4 extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         isLog: true
      }
    }
   // method 4 wanto render something or nothing
   // only one option
  render() {
   return (
    this.state.isLog && <h1>Hiii shan</h1>
   )
  }
}
