import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Shan"
      }
    }
   
    // componentDidMount(){
    //     setInterval(()=>{
    //     this.setState({
    //         name : "Shan"
    //     })
    //     },2000)
    // }

    
  render() {
    console.log("This is Parent Component")
    return (
      <div>
        <h1>Parent Component</h1>
        <p>Before execution uncomment the componentDidMount</p>
        <RegularComponent name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}
