import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIce } from '../../redux'

function ItemContainer(props) {
  return (
    <div>
        <h1>MapStateToProps</h1>
        <h3 className='note'>it has 2 props (state,ownProps) </h3>
        <h3  className='note'>2nd props is for condtionally operate state . see this file in App.js  and note that prop</h3>
        <h2>Items {props.item}</h2>

        <h1>mapDispatchToProps</h1>
        <h3 className='note'> it has 2nd prop for condtionally dispatch action</h3>
        <button onClick={props.actionDispatch}>BUY ITEM</button>

        <h3 className='note'>Note:- in connect function if u are using only mapDispatchToProps = connect(null,mapDispatchToProps) this first params should be like this</h3>
    </div>
  )
}

const mapStateToProps=(state,ownProps)=>{
   const items = ownProps.cake ? state.cake.numOfCake : state.ice.numOfIce

   return{
    item: items
   }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchItem = ownProps.cake ? ()=> dispatch(buyCake()) :()=> dispatch(buyIce())
    return{
        actionDispatch : dispatchItem
    }
   }

export default connect(mapStateToProps,mapDispatchToProps) (ItemContainer)