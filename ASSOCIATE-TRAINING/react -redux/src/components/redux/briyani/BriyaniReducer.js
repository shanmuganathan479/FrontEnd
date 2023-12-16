import { BUY_BRIYANI } from "./BriyaniType"

const initialState ={
    priceOfBriyani : 0,
    dummyValue: 100
}

export const briyaniReducer =(state = initialState,action)=>{
   switch (action.type) {
    case BUY_BRIYANI:
        return{
            ...state,
            priceOfBriyani: state.priceOfBriyani + 150
        }
        
    default: return state
   }
}