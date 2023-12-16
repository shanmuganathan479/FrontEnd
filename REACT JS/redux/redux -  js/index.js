const redux = require("redux")

const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE"

 function buyCake(){
   return{
      type: BUY_CAKE,
      info: "First action"
   }
}

// (prevState,action) => newState


// 1st principle always objects

const intialState={
    numberOfCakes : 10
}

const reducer=(state = intialState,action)=>{

    switch (action.type) {
        case BUY_CAKE: return{
            ...state,
           numberOfCakes: state.numberOfCakes -1
        }
        default: return state
    }

}

const store = createStore(reducer)  //1st responsiblity

console.log("IntialState", store.getState())  //2nd responsiblity

// console.log(store.getState())

// store.dispatch(buyCake())


const unsubscribe= store.subscribe(()=>console.log("updated state",store.getState())) // 4th responsiblity (listeners : any state change print the console)

store.dispatch(buyCake())
store.dispatch(buyCake())  //# 3rd responsiblity
store.dispatch(buyCake())

unsubscribe()


store.dispatch(buyCake())
store.dispatch(buyCake())  //# 3rd responsiblity
store.dispatch(buyCake())

