import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchData2() {
    const[posts,setPosts]=useState([])
    const[id,setId] =useState(1)

   const[idFromButtonTrigger,setIdFromButtonTrigger] =useState(1)


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res=>{
            console.log(res)
            setPosts(res.data)
        }   
        )
        .catch( err=>
            console.log(err)
        )
    },[idFromButtonTrigger])

    // we have to passthe dependancy then only we can get the correct data

    

    const handleChange=(e)=>{
       setId(e.target.value)
    }

    const handleClick=()=>{
        setIdFromButtonTrigger(id)
    }
  return (
    <div>
        <h1>Fetching individual Data with useEffect part-2 ,3</h1>
        <input type="text" 
        value={id}
        onChange={handleChange}
        ></input>

        <button onClick={handleClick}>Fetch</button>

        <h2>{posts.title}</h2>
        
    </div>
  )
}

export default FetchData2