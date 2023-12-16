import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email: "",
         post: "",
         location: "Nagai"
      }
    }

    handleEmail =(e)=>{
       
        this.setState({
            email : e.target.value,
        },()=>{
        console.log(this.state.email)
        }
        )
    }

    handlePost =(e)=>{
        this.setState({
            post : e.target.value
        },()=>{
            console.log(this.state.post)
        })

    }

    handleLocation =(e)=>{
        this.setState({
            location: e.target.value
        },()=>{
            console.log(this.state.location)
        })
    }

    handleSubmit =(e)=>{

        alert(`${this.state.email}${this.state.post}${this.state.location}`)
    }
  render() {
    return (
      <div>
        <h1>Form Handling</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label>Email</label>
            <input type="text" value={this.state.email} onChange={this.handleEmail}></input>
            </div>

            <div>
                <label>Share ur post</label>
                <textarea value={this.state.post} onChange={this.handlePost}></textarea>
            </div>
            <div>
                <label>Location</label>
                <select value={this.state.location} onChange={this.handleLocation}>
                    <option>Thiruvarur</option>
                    <option>Nagai</option>
                    <option>Vedaranyam</option>
                </select>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
