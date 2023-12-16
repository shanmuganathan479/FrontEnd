import React, { Component } from "react";
import Shop4 from "./Shop4";
import AppleContext, { SonyContext } from "./AppleContext";

export default class Shop3 extends Component {
  static contextType = SonyContext;
  render() {
    return (
      <div>
        <h2>Shop3</h2>

        <h3>{this.context}</h3>
        {/* <h3>{this.context}</h3> */}

        <Shop4 />
      </div>
    );
  }
}

// Shop3.contextType =AppleContext
