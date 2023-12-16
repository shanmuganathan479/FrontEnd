import axios from 'axios';
import React, { Component } from 'react'

export class PostReq extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          userId : "",
          title : "",
          body : ""
      }
    }

    handleSubmit =(e)=>{
        e.preventDefault();
         console.log(this.state)
     
         axios.post("https://jsonplaceholder.typicode.com/posts",this.state)

         .then(req=>{
            console.log(req)
         })
         .catch(err=>{
            console.log(err)
         })

    }

    handleChange =(e)=>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }
  render() {
       const {userId,title,body}= this.state
    return (
      <div>
        <h1>Post Request</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            name='userId' 
            value={userId} 
            onChange={this.handleChange}></input>

            <input type="text" 
            name='title'
            value={title} 
            onChange={this.handleChange}></input>

            <input 
            type="text" 
            name='body' 
            value={body}
            onChange={this.handleChange}></input>

            <button>submit</button>
        </form>
      </div>
    )
  }
}

export default PostReq