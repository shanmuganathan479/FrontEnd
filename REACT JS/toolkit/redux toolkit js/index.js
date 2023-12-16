const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions
const fetchUsers = require("./features/user/userSlice").fetchUsers
console.log("IntialState", store.getState());

const unsubscribe = store.subscribe(()=>{console.log("update state",store.getState())})

// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());

// store.dispatch(cakeActions.restock(10));


// store.dispatch(iceCreamActions.order())
// store.dispatch(iceCreamActions.order())
// store.dispatch(iceCreamActions.order())

// store.dispatch(iceCreamActions.restock(20))


// unsubscribe()
store.dispatch(fetchUsers())
