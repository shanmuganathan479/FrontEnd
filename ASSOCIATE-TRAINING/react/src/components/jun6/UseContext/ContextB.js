import React from 'react'
import ContextC from './ContextC'
import { MobileConsumer, PriceConsumer } from './MobileContext'

const ContextB = () => {
  return (
    <div>
        <h2>Context B -(Normal consuming)</h2>
        <MobileConsumer>
          {
            (mobile)=>{
              return(
                <PriceConsumer>
                  {
                    (price)=>{
                      return <h2>Mobile is {mobile} price is {price}</h2>
                    }
                  }
                </PriceConsumer>
              )
            }
          }
        </MobileConsumer>
        <ContextC/>
    </div>
  )
}

export default ContextB