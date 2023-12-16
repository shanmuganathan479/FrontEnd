import React, { Component } from 'react'
import Updating2 from './Updating2'

export default class Upadting1 extends 
Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first: "first"
      }
      console.log("Updating1 constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        
        console.log("Updating1 getDerivedStateFromProps")
        return null
    }
    
    shouldComponentUpdate(){
        console.log("Updating1 shouldComponentUpdate")

        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("Updating1 getSnapshotBeforeUpdate")
        return null
    }
   
    componentDidUpdate(){
        console.log("Updating1 componentDidUpdate")
   
    }

    handleChange =()=>{
        this.setState({
            first: "second"
        })
    }
  render() {
    console.log("Updating1 render")

    return (
      <div>
        <h1>Updating1</h1>
        <button onClick={this.handleChange}>change state</button>
        <li>getDerivedStateFromProps</li>
        <li>shouldComponentUpdate</li>
        <li>render</li>
        <li>getSnapshotBeforeUpdate</li>
        <li>componentDidUpdate</li>
        <Updating2/>
      </div>
    )
  }
}
