import React,{useContext} from 'react'

import UserContext from '../beforeUseContext/NormalContext'
import { UserContext2 } from '../beforeUseContext/NormalContext'
function UseContextExample() {
    const fName= useContext(UserContext)
    const lName= useContext(UserContext2)

  return (
    <div>
        <h1>UseContextExample</h1>
        <h2 className='note'>Creating context and providing is same</h2>
        <h2 className='note'>Only consuming differs</h2>
        <h3>First name ={fName} Last name ={lName}</h3>
    </div>
  )
}

export default UseContextExample