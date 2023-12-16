import React from 'react'
import style from './style.module.css'
function Cssstyling() {

    const inlineStyles={
         color: "red",
         fontSize: "50px"
    }
  return (
    <div>
        <h1>Css styling</h1>
        <li className='css'>CSS</li>
        <li style={inlineStyles}>Inline styling</li>
        <li className={style.modules}>CSS modules</li>
        <li>CSS in JS libraries</li>
    </div>
  )
}

export default Cssstyling