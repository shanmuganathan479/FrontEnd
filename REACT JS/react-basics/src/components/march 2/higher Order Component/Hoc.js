import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent,incrementNumber)=>{
    
    class NewComponent extends  React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count :0
            }
          }
      
          handleCounter =()=>{
              this.setState(prevState=>{
      
                  return{count : prevState.count+incrementNumber}
              })
          }
      
       render(){
        console.log(this.props.name)
        return <OriginalComponent 
        count={this.state.count} 
        handleCounter= {this.handleCounter}
        {...this.props}/>
       }
    }
    return NewComponent
}

export default UpdatedComponent