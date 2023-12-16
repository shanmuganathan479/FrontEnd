import React,{useState} from 'react'
import { connect  } from 'react-redux'
import { buyCake } from '../../redux'


const NewCakeContainer = (props) => {
  const [count, setCount] = useState(1)
  return (
    <div>
        <h1 className='note' value={count} onChange={(e)=>setCount(e.target.value)}>Action Payload</h1>
        <h2>NewCakeContainer </h2>
        <input type="text" />
        <h2>Number of cakes ={props.numOfCake }</h2>
        <button onClick={()=>props.buyCake(count)}>BUY CAKE</button>
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
    buyCake: count => dispatch(buyCake(count))

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
