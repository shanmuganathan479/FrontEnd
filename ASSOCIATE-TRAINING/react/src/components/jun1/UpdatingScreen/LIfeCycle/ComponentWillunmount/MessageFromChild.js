import React, { Component } from 'react'

export default class MessageFromChild extends Component {
    componentWillUnmount(){
        console.log("Hey i removed from DOM")
    }
    componentDidMount(){
        console.log("I mounted on DOM")
    }
    render() {
        return (
            <div>
                <h2 style={{color: "brown"}}>Hey you have a new message</h2>
            </div>
        )
    }
}
