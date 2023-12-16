import axios from 'axios';
import React,{useEffect,useState} from 'react'

function WithUseState() {
    const[post,setPost]=useState();
    const[error,setError]=useState("");
    const[loading,setLoading]=useState(true);

  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response)=>{
        setPost(response.data)
        setLoading(false)
        setError("")
      })
      .catch((error)=>{
        setPost("")
        setError("Something went wrong.....")
        setLoading(false)
      })
  },[])
    
  return (
    <div>
        <h1>Data fetching With UseState</h1>
        {
          loading?  "loading............." : 
          <h2>Title===={post.title}</h2>
        }
        {
            error ? error : null
        }
    </div>
  )
}

export default WithUseState