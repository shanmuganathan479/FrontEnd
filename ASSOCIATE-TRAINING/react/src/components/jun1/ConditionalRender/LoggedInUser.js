import React from 'react'
import { useState } from 'react'

const ShortCircuit = () => {
  const [logged] = useState(true)
  return (
    <div>
      <h2>ShortCircuit</h2>
      {
      logged && <h3>Hey User</h3>
    }
    {/* Only one option */}
    </div>
   
  )
}

export default ShortCircuit