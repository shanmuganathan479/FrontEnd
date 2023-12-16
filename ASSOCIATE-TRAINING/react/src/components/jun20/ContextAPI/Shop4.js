import React, { Component } from "react";
import { AppleConsumer, SonyConsumer } from "./AppleContext";
import Shop5 from "../useContext/Shop5";

export default class Shop4 extends Component {
  render() {
    return (
      <div>
        <h2>Shop4</h2>
        <AppleConsumer>
          {(apple) => {
            return (
              <SonyConsumer>
                {(sony) => {
                  return (
                    <h3 style={{ color: "red" }}>
                      APPLE {apple} SONY {sony}
                    </h3>
                  );
                }}
              </SonyConsumer>
            );
          }}
        </AppleConsumer>
        <Shop5/>
      </div>
    );
  }
}

