import { combineReducers } from "redux";
import biscuitReducer from "./biscuit/BiscuitReducer";
import { briyaniReducer } from "./briyani/BriyaniReducer";

const rootReducer = combineReducers({
   biscuit: biscuitReducer,
   briyani: briyaniReducer
})

export default rootReducer