import React, { Component } from 'react'

export default class ChangingColor2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color: "orange"
      }
    }
    static getDerivedStateFromProps(props,state){
        return {color: props.color}
    }
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>Hey i am Orange</h1>
            </div>
        )
    }
}
