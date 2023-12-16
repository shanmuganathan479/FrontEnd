import React, { useId,useState } from 'react'

const UniqueId = () => {

    const [name, setname] = useState("")
    const id = useId()
    const id2 = useId()
    const id3 = useId()

    const handleChange=(e)=>{
      setname(e.target.value)
    //   console.log(e.target.value)
    }

   const handleSubmit=(e)=>{
    e.preventDefault()
       alert("Name=>" + name + "Id=>"+ id3)
   }
    // console.log("Name=>" + name + "Id=>"+ id3)
  return (
    <div>
        <h1>UseId</h1>
        <h2>Random id = {id}</h2>
        <h2>Random id2 = {id2}</h2>

        <form onBlur={handleSubmit}>
            <input type='text' id={id3} onChange={handleChange} value={name}/>
            <button type='submit'>submit</button>
        </form>
        

        {/* Generate random id */}
    </div>
  )
}

export default UniqueId