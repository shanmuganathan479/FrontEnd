import React from 'react'
import nopageFound from "../assests/3828537.jpg"
const PageNotFound = () => {
  return (
    <div>
        <h1>PageNotFound</h1>
        <img src={nopageFound} alt='No image' style={{width: 1000,height: 800}}/>
    </div>
  )
}

export default PageNotFound