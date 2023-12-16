import { BUY_CAKE } from "./CakeType"

const initState={
    numOfCake: 10
}

const CakeReducer = (state = initState,action)=>{
   switch (action.type) {
       case BUY_CAKE:
        return{
            ...state,
            numOfCake : state.numOfCake - action.payload
        }
        
    default: return state 
   }
}

export default CakeReducer