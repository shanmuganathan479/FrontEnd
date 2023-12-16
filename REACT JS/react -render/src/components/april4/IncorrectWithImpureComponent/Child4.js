import React from 'react'

const Child4 = ({name}) => {
    console.log("Child 4")
    const date = new Date
  return (
    <div>
        <h2>Child4</h2>
        <h3>Hello {name} Time is {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h3>

        <h3 className='note'>Note:- For this situation memo won't work (Date need every tym refresh)</h3>
    </div>
  )
}

export default React.memo(Child4)

// export default Child4