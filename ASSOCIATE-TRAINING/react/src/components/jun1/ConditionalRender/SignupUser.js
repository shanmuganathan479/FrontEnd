
import React, { Component } from 'react'

export default class ElementVariable extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         logged: true
      }
    }
    render() {
        // return (
        //     <div>
        //         <h2>ElementVariable</h2>
        //     </div>
        // )
       let message;
        if (this.state.logged) {
            message = <h2>Element variable - Hey User</h2>
        } else {
            message = <h3>Hey Guest You have to Signp</h3>
            
        }

        return message
    }
}
