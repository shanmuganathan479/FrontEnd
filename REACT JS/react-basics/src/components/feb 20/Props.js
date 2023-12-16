import React from 'react'

function Props(props) {
    console.log(props)
  return (
    <div>     
    <h1>I am gonna reuse the functional component for multiple values</h1>
    <h2>My fav mobile is ={props.mobile}</h2>
    {props.children}
    </div>
  )
  // {} used for jsx
  // children is used for additional html tags
}

export default Props