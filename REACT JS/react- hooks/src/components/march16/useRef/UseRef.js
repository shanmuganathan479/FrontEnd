import React,{useEffect,useRef} from 'react'

function UseRef() {
     
   const inputRef = useRef(null)
    useEffect(()=>{
      inputRef.current.focus()
    },[])
  return (
    <div>
        <h1>UseRef</h1>
        <h3>Imperatively accsess the DOm in Functional component</h3>
        <h2>1)First example = Focus input box</h2>
        <h3>Please look the input box (refresh) intially it willbe focused</h3>
        <input ref={inputRef}></input>
    </div>
  )
}

export default UseRef