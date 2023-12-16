import React, { Component } from 'react'

export default class SetState extends 
Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }

    handleCounter(){

        // this.setState({
        //     count : this.state.count + 1
        // },() =>{
        //     console.log(this.state.count) 
        //     //use this
        // })
        
        // that is callback function so it make changes live

        // console.log(this.state.count) should not use like this it wont make changes live

      // 5 Tyms
       
      this.setState((prevState)=>({
        count : prevState.count + 1
    }))
    }

     handleCounter5Tyms(){
         this.handleCounter();
         this.handleCounter();
         this.handleCounter();
         this.handleCounter();
         this.handleCounter();

     }

  render() {
    return (
      <div>
        <h1>SetState</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=> this.handleCounter()}>++++++++</button>

        <button onClick={()=> this.handleCounter5Tyms()}>5+++++++</button>
      </div>
    )
  }
}
