import React, { Component } from 'react'

export default class RegularComponent extends Component {
  render() {
    console.log("This is Regular Component")
    return (
      <div>
        <h1>RegularComponent {this.props.name}</h1>
      </div>
    )
  }
}
