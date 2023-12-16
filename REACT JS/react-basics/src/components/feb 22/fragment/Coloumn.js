import React from 'react'

function Coloumn() {
  const numbers= []
  return (
    // <div>
    //     <td>Shan</td>
    //     <td>Stark</td>
    //     <td>Hemmu</td>
    // </div>
   // will show an error


//     <React.Fragment>
//       {
//         numbers.map(item =>
//           <React.Fragment key={item.id}>
//             <h1>Title</h1>
//             <p>{item.title}</p>
//           </React.Fragment>)
//       }
//     <td>Shan</td>
//     <td>Stark</td>
//     <td>Hemmu</td>
//  </React.Fragment>

 // wont show error

  <>
        <td>Shan</td>
        <td>Stark</td>
        <td>Hemmu</td>
    </>

    //we can also use empty tag
    // We can't pass key value
  )
}

export default Coloumn