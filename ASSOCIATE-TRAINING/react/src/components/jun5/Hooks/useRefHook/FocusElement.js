import React, { useEffect, useRef } from 'react'

const FocusElement = () => {

    const inputRef =useRef(null)

    const textRef = useRef(null)

    useEffect(()=>{
       inputRef.current.focus()
      //  inputRef.current.blur()
      inputRef.current.style.color = "red" 

      console.log(inputRef)
      console.log(inputRef.current)
      console.log(inputRef.current.focus())

    },[])

    const handleChange=()=>{
        textRef.current.textContent = "Stark"
        textRef.current.style.backgroundColor = "lavender"
    }
  return (
    <div>
        <h2>Focusing input</h2>
        <input type='text'  ref={inputRef}/>
        <h1 ref={textRef}>Shan</h1>
        <button onClick={handleChange}>ChangeName</button>
    </div>
  )
}

export default FocusElement