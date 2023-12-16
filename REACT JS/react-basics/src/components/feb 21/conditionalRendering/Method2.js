import React, { Component } from 'react'

export default class Method2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLogged: true
           // condtion
        }
      }
     
      // element variable method 2
  render() {
    let message;
    if (this.state.isLogged) {
        message = <h1>Hii shan</h1>
        
    } else {
        message = <h1>Hii guest</h1>
    }

    return <h1>{message}</h1>
  }
}
