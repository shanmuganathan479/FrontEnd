import React, { Component } from 'react'

export default class ContentChange extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "My name is Shan"
      }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({name: "My full name is shanmuganathan"})
        },2000)
    }
    getSnapshotBeforeUpdate(PrevProps,preState){
       document.getElementById("snap").innerHTML= "Hey i am getSnapshotBefore update the previous state is = "+ preState.name

       return null
    }
    componentDidUpdate(){
      document.getElementById("message").innerHTML = "Hey i am a Component did update - After rerender i will be called"
    }

    shouldComponentUpdate(){
        return true
    }

    render() {
        return (
            <div>
                <h2 >Updating - Component did update</h2>
                <h2 style={{color: "coral"}}>{this.state.name}</h2>
                <h2 id="message"></h2>
                <h3 id="snap"></h3>
            </div>
        )
    }
}
