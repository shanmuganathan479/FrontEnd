import React from 'react'

const FRInput=React.forwardRef((props,ref)=>{
    
    return(
        <div>
            <h1>forwardingRefs </h1>
            <input ref={ref}></input>
        </div>
    )
}   
)

export default FRInput