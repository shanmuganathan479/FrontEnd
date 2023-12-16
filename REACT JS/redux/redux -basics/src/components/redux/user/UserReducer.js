import { FETCH_REQ, FETCH_SUCS, FETCH_FAIL } from "./UseType";

const initState = {
  users: [],
  loading: false,
  error: "",
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: ""
      };

      case FETCH_FAIL:
        return {
          ...state,
          loading: false,
          users: [],
          error: action.payload
        };

    default:
      return state;
  }
};

export default userReducer
