import React from 'react'

function FragmentDemo() {
  return (
    // <div>
    //    <h1>React frognment</h1>
    //     <p>Please watch this tag in DOM</p>
    // </div>
    //in Dom it has a <div> </div> enclosing tag

     <React.Fragment>
     <h1>React frognment</h1>
      <p>Please watch this tag in DOM</p>
  </React.Fragment>
  //It dont have enclose tag in DOM
  )
}

export default FragmentDemo