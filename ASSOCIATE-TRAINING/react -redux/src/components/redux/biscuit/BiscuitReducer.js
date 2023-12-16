import { BUY_BISCUIT } from "./BiscuitType";

const intialState = {
  priceOfMarioBiscuit: 0,
};

const biscuitReducer = (state = intialState, action) => {

  // console.log("Action",action)

  // console.log(typeof(action))
  //Object
   
  // console.log(typeof(action.type))
  // string

  // console.log("Action type",action.type)
  //BUY_ACTION

  switch (action.type) {
    case BUY_BISCUIT:
      return {
        ...state,
        priceOfMarioBiscuit: state.priceOfMarioBiscuit + 10,
      };

    default:
      return state;
  }
};
 


export default biscuitReducer;
