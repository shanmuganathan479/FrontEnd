import React, { Component } from 'react'


export default class Updating2 extends 
Component {

    constructor(props) {
      super(props)
    
      this.state = {
         first: "first"
      }
      console.log("Updating2 constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        
        console.log("Updating2 getDerivedStateFromProps")
        return null
    }
    
    shouldComponentUpdate(){
        console.log("Updating2 shouldComponentUpdate")

        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("Updating2 getSnapshotBeforeUpdate")
        return null
    }
   
    componentDidUpdate(){
        console.log("Updating2 componentDidUpdate")
   
    }

    handleChange =()=>{
        this.setState({
            first: "second"
        })
    }
  render() {
    console.log("Updating2 render")

    return (
      <div>
        <h1>Updating2</h1>
      </div>
    )
  }
}
