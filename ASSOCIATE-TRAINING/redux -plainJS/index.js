
const redux = require("redux")
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()


//Action
const BUY_MARIO_BISCUIT = "BUY_MARIO_BISCUIT"
const BUY_BRIYANI = "BUY_BRIYANI"


// Action Creator - just a function retur action

const buyBiscuit=()=>{
   return {
    type: BUY_MARIO_BISCUIT
   }
}

const buyBriyani=()=>{
  return {
    type: BUY_BRIYANI
  }
}

//Intial state - { all are objects}
const intialBisCuitState={
    priceOfBiscuits : 0
}

const intialBriyaniState ={
    priceOfBriyani : 150
}

//Reducer - take state,action and return newstate

const bisCuitReducer =(state = intialBisCuitState,action)=>{
   switch (action.type) {
    case BUY_MARIO_BISCUIT: 
      return{
          ...state,
          priceOfBiscuits: state.priceOfBiscuits + 10
      }
        
    default: return state
   }
}

const briyaniReducer =(state = intialBriyaniState,action)=>{
    switch (action.type) {
        case BUY_BRIYANI:
            return {
                ...state,
                priceOfBriyani: state.priceOfBriyani + 150
            }
    
        default: return state
    }
}


//Combining reducers

const rootReducer = combineReducers({
    biscuit: bisCuitReducer,
    briyani: briyaniReducer
})


// Configuring store

const store = createStore(rootReducer,applyMiddleware(logger))

// 1) get state
console.log("Intial state",store.getState())

//2) subscribing store
// const unsubscribe = store.subscribe(()=>console.log("Updated state",store.getState()))
const unsubscribe = store.subscribe(()=>{})



// 3) dispatch action

store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())
store.dispatch(buyBiscuit())

store.dispatch(buyBriyani())
store.dispatch(buyBriyani())
store.dispatch(buyBriyani())
store.dispatch(buyBriyani())
store.dispatch(buyBriyani())


// 4) unsubscribe

unsubscribe()