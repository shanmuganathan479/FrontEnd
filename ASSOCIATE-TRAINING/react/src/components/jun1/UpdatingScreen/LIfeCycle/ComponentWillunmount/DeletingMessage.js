import React, { Component } from 'react'
import MessageFromChild from './MessageFromChild'

export default class DeletingMessage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hide : true
      }
    }

    handleHide=()=>{
     this.setState({
        hide: false
     })
    }
    render() {
        return (
            <div>
                <h2>Unmounting - Component will unmount</h2>
                {
                this.state.hide &&
                <MessageFromChild/>
                }
                <button onClick={this.handleHide}>Delete message</button>
            </div>
        )
    }
}
