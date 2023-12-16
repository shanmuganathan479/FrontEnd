const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

//State
const initState = {
  loading: false,
  users: [],
  error: "",
};

//Action

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

//ActionCreator

const fetchUseeRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchSuccess = (user) => {
  return {
    type: FETCH_SUCCESS,
    payload: user,
  };
};
const fetchFailiure = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
};

//Reducers

const reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUseeRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchSuccess(users));

      })
      .catch((error) => {
        dispatch(fetchFailiure(error.message));
      });
  };
};

// create store

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(()=> console.log(store.getState()))

store.dispatch(fetchUsers())