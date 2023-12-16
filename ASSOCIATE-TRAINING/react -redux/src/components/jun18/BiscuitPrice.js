import React from "react";
import { buyBiscuit } from "../redux/biscuit/BiscuitAction";
import { connect } from "react-redux";
const BiscuitPrice = (props) => {
  return (
    <div>
      <h1>BiscuitPrice -{props.priceOfMarioBiscuit}</h1>
      <button onClick={props.buyBiscuit}>Buy Mario Biscuit</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    priceOfMarioBiscuit: state.biscuit.priceOfMarioBiscuit ,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBiscuit: () => {
      dispatch(buyBiscuit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiscuitPrice);
