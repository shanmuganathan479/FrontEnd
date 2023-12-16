const { default: axios } = require("axios");
const redux = require("redux");
const applyMiddleware= redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").default

// IntialState
const initState = {
  loading: false,
  users: [],
  error: "",
};

// Action type

const FETCH_USER_REQ = "FETCH_USER_REQ";
const FETCH_USER_SUCS = "FETCH_USER_SUCS";
const FETCH_USER_FAIL = "FETCH_USER_FAIL";

// Action creator

const fetchUserReq = () => {
  return {
    type: FETCH_USER_REQ,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCS,
    payload: users,
  };
};
const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error,
  };
};

// reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_REQ:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        loading: false,
        users: [],
        error : action.payload

      };

    default:
      return state;
  }
};


// Define async action creator from redux-thunk
const fetchUsers=()=>{

  return (dispatch)=>{
    dispatch(fetchUserReq)
    axios.get("https://jsonplaceholder.typicode.com/user")
    .then((response)=>{
      const users = response.data.map(user=>user.id)
      dispatch(fetchUserSuccess(users))
    })
    .catch((error)=>{
      dispatch(fetchUserFailed(error.message))
    })
  }
}

// Configuring store
const store = redux.createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())