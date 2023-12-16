import React,{useContext} from 'react'
import { CountContext } from './ContextParent'

 export const ChildA = () => {
    console.log("Context - childA")
  return (
    <div>
        <h2>Context childA</h2>
        <h3 className='note'>Every component will render</h3>
        <ChildB/>
    </div>
  )
}
export const  MemoChildA= React.memo(ChildA)

export const ChildB = () => {
    console.log("Context - childB")
  return (
    <div>
        <h2>Context childB</h2>
        <ChildC/>
    </div>
    )
}

export const ChildC = () => {
    const first = useContext(CountContext)
    //     this name should be same from the provider
    console.log("Context - childC")
  return (
      <div>
        <h2>Context childC </h2>
        <h3> countContext is {first}</h3>
        <h3 className='note'>Only provide consumer component render</h3>
    </div>

  )
}