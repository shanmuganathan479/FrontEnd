import React from 'react'
import { connect  } from 'react-redux'
import { buyCake } from '../../redux'


const CakeContainer = (props) => {
  return (
    <div>
        <h1 className='note'>REACT REDUX</h1>
        <h2>CakeContainer </h2>
        <h2>Number of cakes ={props.numOfCake }</h2>
        <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  )
} 

// To get appropriate state from store
const mapStateToProps=(state)=>{
  return{
    numOfCake : state.cake.numOfCake
  }
}


// To map appropriate action creator from store
const mapDispatchToProps =(dispatch)=>{
  return{
    buyCake: ()=> dispatch(buyCake())

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)

// connect functions to redux store





// import React from 'react'
// import { connect  } from 'react-redux'
// import { buyIce } from '../../redux'


// const CakeContainer = (props) => {
//   return (
//     <div>
//         <h1 className='note'>REACT REDUX</h1>
//         <h2>CakeContainer </h2>
//         <h2>Number of cakes ={props.numOfIce }</h2>
//         <button onClick={props.buyIce}>BUY CAKE</button>
//     </div>
//   )
// } 

// // To get appropriate state from store
// const mapStateToProps=(state)=>{
//   return{
//     numOfIce : state.ice.numOfIce
//   }
// }


// // To map appropriate action creator from store
// const mapDispatchToProps =(dispatch)=>{
//   return{
//     buyIce: ()=> dispatch(buyIce())

//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)

// // connect functions to redux store