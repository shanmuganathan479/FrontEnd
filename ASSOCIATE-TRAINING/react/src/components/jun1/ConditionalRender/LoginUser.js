import React, { Component } from 'react'

export default class IfElse extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       logged: true
    }
  }
  render() {
    // return (
    //   <div>
    //     <h2>IfElse (can't use i jsx)</h2>
    //   </div>
    // )


    if (this.state.logged) {
       return <h2> If()Else - Hey user</h2>
    } else {
      return <h3>Hey guest login first</h3>
    }
  }
}
