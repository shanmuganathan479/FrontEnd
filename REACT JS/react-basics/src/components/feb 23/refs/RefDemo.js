import React, { Component } from 'react'

export default class RefDemo extends Component {

    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()  
     //1st method

    //  this.callbackRef = null;
    //  this.setCbRef = (element=>{
    //     this.callbackRef = element;
    //  })
    // 2nd old approach
     
    }

    componentDidMount(){
        this.inputRef.current.focus();
        //1st method
        console.log(this.inputRef)

        // if(this.callbackRef){
        //     this.callbackRef.focus();
        // }
    }

    handleClick =()=>{
        alert( this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <h1>Ref</h1>
        <input ref={this.inputRef}></input>
    
{/* 
        <input ref={this.setCbRef}></input> */}

        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}
