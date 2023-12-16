import React, { useContext } from 'react'
import MobileContext, { PriceContext } from './MobileContext'

const ContextC = () => {
    const mobile= useContext(MobileContext)
    const price = useContext(PriceContext)
  return (
    <div>
        <h2>Context C (With useContext)</h2>
        <h3>Mobile is {mobile} Prize is {price}</h3>
    </div>
  )
}

export default ContextC