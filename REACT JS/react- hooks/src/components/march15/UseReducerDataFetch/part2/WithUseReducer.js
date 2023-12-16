import axios from 'axios'
import React,{useReducer,useEffect} from 'react'


const intialState ={
    loading : true,
    post : {},
    error : ""
}

const reducer=(state,action)=>{

    switch(action.type){
        case "SUCCESS":
            return {
                loading: false,
                post : action.payload,
                error: ""
            }
            case "FAILED":
                return {
                    loading: false,
                    post : {},
                    error: "Something went wrong......."
                }
                
                default:{
                    return state
                }
    }

}

   
function WithUseReducer() {

   const [state,dispatch] = useReducer(reducer,intialState)

   useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/posts/1")

    .then((response)=>{
        dispatch({type: "SUCCESS",payload: response.data})
    })
    .catch((error)=>{
        dispatch({type: "FAILED",})
    })
 },[])
  return (
    <div>
        
        <h1>Data fetching with UseReducer</h1>
        {
          state.loading ? "loading...." : 
          <h2>Title ==== {state.post.title}</h2>
        }
        {
            state.error ? state.error : null
        }
    </div>
  )
}

export default WithUseReducer