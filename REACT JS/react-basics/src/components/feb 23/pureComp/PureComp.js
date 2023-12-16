import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <h1>Pure component {this.props.name}</h1>
        <p>See the console it wont do unwanted rerender</p>
      </div>
    )
  }
}

export default PureComp