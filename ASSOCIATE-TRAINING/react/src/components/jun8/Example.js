import React,{useState} from 'react'

const Example = () => {
    const [name, setname] = useState("")

    const handleBlur=(e)=>{
    //    console.log(e.target.value)
    setname(e.target.value)
    }
  return (
    <div>
        <h1>Example</h1>
        <input type='text' onBlur={handleBlur} />
        <h2>{name}</h2>
    </div>
  )
}

export default Example