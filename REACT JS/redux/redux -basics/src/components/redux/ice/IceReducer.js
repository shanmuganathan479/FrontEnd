import { BUY_ICE } from "./IceType"

const initState={
    numOfIce: 100
}

const iceReducer=(state = initState,action)=>{
   switch (action.type) {
    case BUY_ICE: return{
        ...state,
        numOfIce : state.numOfIce -1
    }
    default: return state
   }
}

export default iceReducer