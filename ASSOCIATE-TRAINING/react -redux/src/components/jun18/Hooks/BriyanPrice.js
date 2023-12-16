import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyBriyani } from '../../redux/briyani/BriyaniAction'
const BriyanPrice = () => {


  // multiple state with useSelector 
  
  const {item,item1}= useSelector(state  => ({
   item: state.briyani.priceOfBriyani,
   item1: state.briyani.dummyValue,
  }))

  const briyaniPrice = useSelector((state)=>{
     console.log(state.briyani)
    return  state.briyani.briyaniPrice
  })
 const dispatch =useDispatch()
  return (
    <div>
        <h1>BriyanPrice Your bill is - {item} {item1} {briyaniPrice}</h1>
        <button onClick={()=>dispatch(buyBriyani())}>Buy briyani</button>
    </div>
  )
}

export default BriyanPrice