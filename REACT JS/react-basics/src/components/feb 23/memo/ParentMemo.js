import React, { Component } from 'react'
import MemoComp from './MemoComp'

export default class ParentMemo extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "Shan"
        }
      }
     
    //   componentDidMount(){
    //       setInterval(()=>{
    //       this.setState({
    //           name : "Shan"
    //       })
    //       },2000)
    //   }
      
    // Before execution uncomment the code
  render() {
    console.log("Parent Memo")

    return (
      <div>
        <h1>ParentMemo</h1>
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}
