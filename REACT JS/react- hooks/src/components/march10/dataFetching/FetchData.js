import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchData() {
    const[posts,setPosts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( res=>{
            console.log(res)
            setPosts(res.data)
        }   
        )
        .catch( err=>
            console.log(err)
        )
    },[])

    //Fetch all data only at a tym []
    // If u missed the [] it will fetch all tym
  return (
    <div>
        <h1>Fetching Data with useEffect</h1>
        <ul>
            {
                posts.map((post)=>{
                    return <li key={post.id}>{post.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default FetchData