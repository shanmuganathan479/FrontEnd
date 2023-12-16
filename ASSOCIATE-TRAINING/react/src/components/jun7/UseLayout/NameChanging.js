import React, { useLayoutEffect,useRef,useState } from 'react'

const NameChanging = () => {

    const [name, setName] = useState("stark")

    const colorRef =useRef()

    useLayoutEffect(()=>{
        if (name === "shan") {
             console.log("Hey boss.....")
             colorRef.current.textContent= " Hiii ....Admin"
             //Dom manipulation special case
             // Faster because of synchronous
             //not advisable for api calls
        } else {
            console.log("Hey who are u...")
        }
    },[name])

    const handleChangeName=()=>{
        setName("shan")
    }
  return (
    <div>
        <h1>UseLayout Hook</h1>
        <h2 ref={colorRef}> Guest </h2>
        <button onClick={handleChangeName}>ChangeName</button>
    </div>
  )
}

export default NameChanging