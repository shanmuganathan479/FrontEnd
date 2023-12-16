import React from 'react'
import { connect } from 'react-redux'
import { buyIce } from '../../redux'

const IcecreamContainer = ({numOfIce,buyIce}) => {
  return (
    <div>
        <h1>IcecreamContainer</h1>
        <h2>IceCream {numOfIce}</h2>
        <button onClick={buyIce}>BUY ICE</button>
        <h3 className='note'>Here u do mistake (without destructring, props.action)</h3>
    </div>
  )
}
const mapStateToProps=(state)=>{
return{
  numOfIce : state.ice.numOfIce
}
}

const mapDispatchToProps=(dispatch)=>{
   return{
    buyIce: ()=> dispatch(buyIce())
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)