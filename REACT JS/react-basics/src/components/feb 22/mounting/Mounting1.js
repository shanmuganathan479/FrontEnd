import React, { Component } from 'react'

import Mounting2 from './Mounting2'
export default class Mounting1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first :"first"
      }
      console.log("Mounting 1 constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Mounting 1 getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
             console.log("Mounting 1 Component did mount")
    }
    
  render() {
    console.log("Mounting 1 render")
    return (
      <div>
        <h1>Mounting</h1>

        <li>constructor()</li>
        <li>getDerivedstateprops</li>
        <li>render()</li>
        <li>componenet didmount</li>
         <Mounting2/>
        </div>
    )
  }
}
