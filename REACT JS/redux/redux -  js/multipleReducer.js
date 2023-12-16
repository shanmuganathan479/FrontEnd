const redux = require("redux")
const reduxLogger = require("redux-logger")


const createStore = redux.createStore
const combineReducer= redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"


 function buyCake(){
   return{
      type: BUY_CAKE,
      info: "First action"
   }
}
function buyIceCream(){
    return{
       type: BUY_ICECREAM,
    }
 }

// (prevState,action) => newState


// 1st principle always objects

const intialCakeState={
    numberOfCakes : 10,
}


const intialIceState={
    numberOfIceCream : 20
}

const cakeReducer=(state = intialCakeState,action)=>{

    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
           numberOfCakes: state.numberOfCakes -1
        }
        default: return state
    }
}

const iceReducer=(state = intialIceState,action)=>{

    switch (action.type) {
        case BUY_ICECREAM: return{
            ...state,
           numberOfIceCream: state.numberOfIceCream -1
        }
        default: return state
    }
}

const rootReducer = combineReducer({
    cake: cakeReducer,
    iceCream : iceReducer,
})


const store = createStore(rootReducer,applyMiddleware(logger))  //1st responsiblity

console.log("IntialState", store.getState())  //2nd responsiblity

// console.log(store.getState())

// store.dispatch(buyCake())


// const unsubscribe= store.subscribe(()=>console.log("updated state",store.getState())) // 4th responsiblity (listeners : any state change print the console)

const unsubscribe= store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyCake())  //# 3rd responsiblity
store.dispatch(buyCake())



store.dispatch(buyIceCream())
store.dispatch(buyIceCream())  //# 3rd responsiblity
store.dispatch(buyIceCream())

unsubscribe()
