import React from 'react'
import Intial from './assests/IntialRender.png'
import Rerend from './assests/Rerender.png'
import Concept from './assests/Concept.png'

function Rerender() {
  return (
    <div>
        <h1>Rerender</h1>
        <h2> Phases</h2>
        <h3>1) Render phase</h3>
        <h3>2)Commit phase </h3>

        <h2>Intial Render</h2>
        <img src={Intial}/>
        <h2>Rerender</h2>
        <img src={Rerend}/>
        <h2>Concept behind the scene</h2>
        <img  src={Concept}/>

    </div>
  )
}

export default Rerender