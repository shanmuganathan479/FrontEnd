import React, { Component } from 'react'

export default class ChangingColor extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         color: "Red"
      }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({ color: 'green' });
          }, 2000);
    }
    render() {
        return (
            <div>
                <h1>LifeCycle</h1>
                <h2> Mouting -  Component Did Mount</h2>
                <h1 style={{
                    color: this.state.color
                }}>Hey look here</h1>
                
            </div>
        )
    }
}
