import React, { Component } from 'react'
import axios from 'axios'

export class GetReq extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: [], errorMessage : ""
      }
    }
     
    // Called only one tym when component mount for very first time
    componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(req =>{
        // console.log(req)
        this.setState({
            posts: req.data
        })
       })
       .catch(err=>{
        // console.log(err)
        this.setState({
            errorMessage : "Error during fetching data"
        })
       })
    }
  render() {
        
      const {posts,errorMessage} = this.state
    return (
      <div>
        <h1>GET REQUEST</h1>
        <h3>Here i am using fake api json placeholder</h3>
        {   
            posts.length ?
            posts.map((post)=>{
               return  <div key={post.id}>{post.title}</div>
                // console.log(post.title)
            }): <div>{errorMessage}</div>

            // edit the url and see the error msg
        }
      </div>
    )
  }
}

export default GetReq