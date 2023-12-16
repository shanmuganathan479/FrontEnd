import React, { Component } from 'react'

export default class RenderProps extends Component {
  render() {
    return (
      <div>
        <h1>RenderProps</h1>
        <p>To share the common functionality b/w the component if props value is function</p>

        {/* <h2>{this.props.name}</h2> */}
        {/* Normal props */}

        {/* <h2>{this.props.name()}</h2> */}
        {/* Props as an argument */}

        <h2>{this.props.render(false)}</h2>

      </div>
    )
  }
}
