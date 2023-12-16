import axios from "axios";
import { FETCH_REQ, FETCH_SUCS, FETCH_FAIL } from "./UseType";

export const fetchReq = () => {
  return {
    type: FETCH_REQ,
  };
};

export const fetchSucs = (users) => {
  return {
    type: FETCH_SUCS,
    payload: users,
  };
};
export const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

export const fetchUsers=()=>{
  return(dispatch)=>{
    dispatch(fetchReq)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      const users = response.data
      dispatch(fetchSucs(users))
    })
    .catch((error)=>{
      const errorMessage = error.message
      dispatch(fetchFail(errorMessage))
    })
  }
}
