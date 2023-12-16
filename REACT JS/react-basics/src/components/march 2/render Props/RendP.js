import React, { Component } from 'react'


export class RendP extends Component {

        constructor(props) {
            super(props)     
            this.state = {
               count :0
            }
          }
          handleCounter =()=>{
              this.setState(prevState=>{
      
                  return{count : prevState.count+1}
              })
          }
  render() {
    return (
      <div>
        <h1>RendProps Example</h1>
        {this.props.render(this.state.count,this.handleCounter)}
      </div>

    )
  }
}

export default RendP