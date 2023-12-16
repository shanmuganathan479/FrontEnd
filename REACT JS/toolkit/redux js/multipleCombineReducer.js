const redux = require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers=redux.combineReducers

//Type
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED"
const ICE_ORDER = "ICE_ORDER"
const ICE_RESTOCK = "ICE_RESTOCK"

//Action creator
const cakeOrder = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const cakeRestock =(qty=1)=>{
   return{
    type: CAKE_RESTOCKED,
    payload: qty
   }
}

const iceOrder=()=>{
  return{
    type: ICE_ORDER
  }
}

const iceRestock=(qty=1)=>{
  return{
    type: ICE_RESTOCK,
    payload: qty
  }
  
}
// const initState = {
//   numOfCake: 10,
//   numOfIceCream : 50,
// };

const initCakeState ={
    numOfCake: 10
}

const initIceState ={
    numOfIceCream: 50
}

//Reducer
const cakereducer = (state = initCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

      case CAKE_RESTOCKED: 
      return{
        ...state,
        numOfCake: state.numOfCake + action.payload
      }
    default:
      return state;
  }
};


const icereducer = (state = initIceState, action) => {
    switch (action.type) {
        case ICE_ORDER:
          return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1,
          };
    
          case ICE_RESTOCK: 
          return{
            ...state,
            numOfIceCream: state.numOfIceCream + action.payload
          }
  
      default:
        return state;
    }
  };
  
// Configuring store
//1st responsiblity

// Combine reducers
const rootReducers = combineReducers({
    cake: cakereducer,
    ice: iceOrder,
})

const store = createStore(rootReducers)

//2nd responsiblity
console.log("Intial state", store.getState())

//4th responsiblity
 const unSubscribe=store.subscribe(()=>console.log("Updated state",store.getState()))

//3rd responsiblity
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())
// store.dispatch(cakeOrder())

// store.dispatch(cakeRestock(10))

//Bind actionCreators
 const actions = bindActionCreators({cakeOrder,cakeRestock,iceOrder,iceRestock},store.dispatch)

 actions.cakeOrder()
 actions.cakeOrder()
 actions.cakeOrder()
 actions.cakeOrder()

 actions.cakeRestock(20)

 actions.iceOrder()
 actions.iceOrder()
 actions.iceOrder()
 actions.iceRestock(25)

// 5 th responseblity
unSubscribe()


