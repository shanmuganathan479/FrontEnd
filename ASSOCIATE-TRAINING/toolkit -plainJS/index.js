const store = require("./app/store");
const { briyaniActions } = require("./app/features/briyani/briyaniSlice");
const { chickenActions } = require("./app/features/chicken65/chicken65Slice");

console.log("Intial state",store.getState())

const unSubscribe = store.subscribe(()=>{console.log("updated state",store.getState())})

store.dispatch(briyaniActions.briyaniOrdered())
store.dispatch(briyaniActions.briyaniOrdered())
store.dispatch(briyaniActions.briyaniOrdered())
store.dispatch(briyaniActions.briyaniOrdered())
store.dispatch(briyaniActions.briyaniOrdered())

store.dispatch(briyaniActions.briyaniCancelled())
store.dispatch(briyaniActions.briyaniCancelled())

store.dispatch(chickenActions.ordered())
store.dispatch(chickenActions.ordered())
store.dispatch(chickenActions.ordered())
store.dispatch(chickenActions.ordered())

store.dispatch(chickenActions.restocked(10))
store.dispatch(chickenActions.restocked(5))


unSubscribe();