import React, { Component } from 'react'

export default class Mounting2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first :"first"
      }
      console.log("Mounting 2 constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Mounting 2 getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
             console.log("Mounting 2 Component did mount")
    }
    
  render() {
    console.log("Mounting 2 render")
    return (
      <div>
        <h1>Mounting</h1>

        <li>constructor()</li>
        <li>getDerivedstateprops</li>
        <li>render()</li>
        <li>componenet didmount</li>

        </div>
    )
  }
}
