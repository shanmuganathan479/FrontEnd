import React from 'react'

function MemoComp({name}) {
  console.log("Memo component")
  return (
    <div>
        <h1>Memo component{name}</h1>
    </div>
  )
}

export default React.memo(MemoComp)

// Here is the memo