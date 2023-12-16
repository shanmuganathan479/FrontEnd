import React,{useState} from 'react'
import { MemoChildA } from './ContextChildren'

export const CountContext = React.createContext()
 const ContextProvider= CountContext.Provider


const ContextParent = ({children}) => {
    
    const [first, setfirst] = useState(0)
    
    console.log("Context - Parent")
  return (
    <div>
        <h1>Context</h1>
        <h2>ContextParent</h2>
        <button onClick={()=>setfirst(c=>c+1)}>Count {first}</button>

        {/* <ContextProvider value={first}>
        <MemoChildA/>
        </ContextProvider> */}

       * <ContextProvider value={first}>
            {children}
        </ContextProvider> 
        
        
    </div>
  )
}

export default ContextParent