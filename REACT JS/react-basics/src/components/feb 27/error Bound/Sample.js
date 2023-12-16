import React from 'react'

function Sample({admin}) {
    if(admin === "unknown"){
        throw new Error ("Not a admin")
    }
  return (
    <div>
        <h1>Error Bounndary</h1>
        <h1>Admin is {admin}</h1>
    </div>
  )
}

export default Sample