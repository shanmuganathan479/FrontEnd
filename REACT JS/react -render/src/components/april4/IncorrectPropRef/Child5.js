import React from 'react'

const Child5 = ({name,avengers,handleAction}) => {
    console.log("Child5")
  return (
    <div>
        <h2>Child5</h2>
        <h3>Hello {name}</h3>

        <h3 className='note'> 1)For object as prop</h3>
        {/* <h3>Avengers {avengers.tony} {avengers.steveRoges} {avengers.bruce}</h3> */}
        
        <h3 className='note'> 2)For function as prop</h3>
        {/* <button onClick={handleAction}>Alert</button> */}
    </div>
  )
}

export default React.memo(Child5)