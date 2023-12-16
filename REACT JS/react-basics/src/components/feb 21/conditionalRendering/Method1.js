import React, { Component } from 'react'

export default class Method1 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLogged: true
       // condtion
    }
  }
  // If else method 1
  render() {
    if (this.state.isLogged) {
      return <h1>Hii shan</h1>
      
    } else {
      return <h1>Hi guest</h1>
      
    }
    //If else method can't use inside the jsx
  }
}
