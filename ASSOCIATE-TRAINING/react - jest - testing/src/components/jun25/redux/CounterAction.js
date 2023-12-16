import { INCREMENT } from "./CounterType";
import { DECREMENT } from "./CounterType";

export const handleIncrement = () => {
  return {
    type: INCREMENT
  };
};

export const handleDecrement = () => {
  return {
    type: DECREMENT
  };
};
