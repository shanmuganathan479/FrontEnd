const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;
//Intial state

const initState = {
  name: "shan",
  address: {
    street: "west street",
    city: "vilakkudi",
    district: "tiruvarur",
  },
};

// Action type
const CHANGE_CITY = "CHANGE_CITY";

//Action creator
const changeCity = (city) => {
  return {
    type: CHANGE_CITY,
    payload: city,
  };
};

// Reducer
const cityReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      // return{
      //     ...state,
      //     address:{
      //         ...state.address,
      //         city: action.payload
      //     }
      // }

      return produce(state, (draft) => {
        draft.address.city = action.payload;
      });

    default:
      return state;
  }
};

// Configuring store

const store = createStore(cityReducer);

console.log("Intial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(changeCity("chennai"));

unsubscribe();
