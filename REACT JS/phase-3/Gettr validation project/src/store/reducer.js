import {createStore} from "redux"
const intialstate={
    users: [],
    loggedinUsers: [],
}
 const reducer =(state = intialstate,action)=>{   
    switch(action.type){    
     
            case "SIGNUP":
                return{
                     ...state,
                     users: [...state.users,action.payload]
                }

        //   case "LOGIN":
        //     return{
        //          ...state,
        //          loggedinUsers: [...state.loggedinUsers,action.payload]        
        //     }

        default:
        return state; 
    }
 }
  export default createStore(reducer)