import React from 'react'

// import url for img
const Curlybraces = () => {

    const name = "Shan"

    const obj ={
        text: "This is shan",
        style: {
            color: "blue"
        }
    }
  return (
    <div>
        <h2>Curlybraces</h2>

        <h3>1.Strings with quotes</h3>

        {/* <img src='url' /> */} 
         {/* Traditional attribute */}

        {/* <img src={url} /> */}
        {/* Need to import and use the name in {} */}

        <h3>2.Expression</h3> 
         <p>Node v{18+1}</p>

        <h3>3.Variables</h3>
        <p>Hi this is {name}</p>

        <h3>4.Double curly braces css and objects</h3>
        <h4 style={{color: "blue"}}>CSS</h4>
        <h4 style={obj.style}>Objects {obj.text}</h4>
        {/* Text and color also coming from objects */}
    </div>
  )
}

export default Curlybraces