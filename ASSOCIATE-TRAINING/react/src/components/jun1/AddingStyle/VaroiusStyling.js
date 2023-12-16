import React from 'react'
import style from "./style.module.css"

const Styh3ng = () => {

    const internalStyle={
        color: "blue"

    }
  return (
    <div>
        <h1>CSS Styling</h1>

            <h3 style={{color: "red"}}>Inline</h3>
            <h3 style={internalStyle}>Internal</h3>
            <h3 className='external' >External</h3>
            <h3 className={style.modules}>Css modules</h3>
            <h3>Css libraries</h3>

    </div>
  )
}

export default Styh3ng