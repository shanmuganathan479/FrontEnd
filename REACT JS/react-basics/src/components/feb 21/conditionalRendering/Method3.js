import React, { Component } from 'react'

export default class Method3 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogged: true
        }
      }
      //Method 3 Ternary operator we can use inside the jsx
  render() {
    return ( 
        this.state.isLogged ? <h1>Hiii shan</h1> : <h1>Hii guest</h1>
    )
  }
}
