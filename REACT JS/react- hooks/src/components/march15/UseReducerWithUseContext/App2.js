import React,{useReducer,useContext} from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'

export const cContext= React.createContext();

const intialState=0;

const reducer=(state,action)=>{
      
    switch(action){
        case "increment":
            return state+1

        case "decrement":
            return state-1  
            
        case "reset":
            return intialState
        default :
           return state

    }
}

function App2() {
   const[count,dispatch]= useReducer(reducer,intialState)

  return (
    <cContext.Provider value={{count: count,dispatch: dispatch}}>
       <div>
        <h1>UseReducer + UseContext</h1>
        <h3 className='note'>useReducer is for local state management</h3>
        <h3 className='note'>Some tym we need to do Global state management(share b/w components)</h3>
        <h3 className='note'>So we are going for useReducer+useContext</h3>
        <h1>App components = {count}</h1>
        <CompA/>
        <CompB/>
        <CompC/>
    </div>
    </cContext.Provider>
   
  )
}

export default App2