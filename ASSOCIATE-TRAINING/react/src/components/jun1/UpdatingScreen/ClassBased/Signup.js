import React, { Component } from 'react'

export default class Signup extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         sign: false
      }
    }

    handleSign=()=>{
        alert("Welcome.......")
        this.setState({
            sign: true
        })
    }


    render() {
        return (
            <div>
                <h2>Upadting screen in Class component</h2>
                <button onClick={this.handleSign}>Signup</button>
                {
                  this.state.sign? <h1>Welcome</h1> : <h2>Signup first</h2>
                }
            </div>
        )
    }
}
