import React,{useState} from 'react'
const initState= {
    fName: "shan",
    lName: "stark"
}
export const ObjectUseState = () => {

    const [names, setNames] = useState(initState)
    
    const handleClick=()=>{
        // names.fName = "Tony"
        // names.lName = "Jarvis"

        // setNames(names)
        // Directly modifying ........ this is wrong way


        const newNames = {...names}

        newNames.fName = "Tony"
        newNames.lName = "Jarvis"

        setNames(newNames)


    }
    console.log("Object UseState")
  return (
    <div>
        <h1>State immutablity =ObjectUseState</h1>
        <h2 className='note'>We shouldn't change the state directly it will create bug</h2>
        <h2>{names.fName}  {names.lName}</h2>
        <button onClick={handleClick}>ChangeName</button>
    </div>
  )
}
