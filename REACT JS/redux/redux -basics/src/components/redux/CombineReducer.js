import { combineReducers } from "redux";
import CakeReducer from "./cake/CakeReducer";
import iceReducer from "./ice/IceReducer";
import userReducer from "./user/UserReducer";


const rootReducer= combineReducers({
    cake: CakeReducer,
    ice: iceReducer,
    user: userReducer
})

export default rootReducer