import { INCREMENT } from "./CounterType";
import { DECREMENT } from "./CounterType";
const intialState = {
  count: 0,
};

const counterReducer = (state = intialState, action) => {
  console.log(action.type)
  switch (action.type) {
    
    case INCREMENT:
      return {
        count: state.count +1
      };
    case DECREMENT:
      return {
        count: state.count -1,
      };

    default:
      return state;
  }
};

export default counterReducer