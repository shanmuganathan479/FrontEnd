import React,{useState,useEffect} from 'react'

export const UseEffectOnlyOnce = () => {

    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    
    const handleMouse=(e)=>{
        console.log("function call")
       setX(e.clientX)
       setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove",handleMouse)

        return()=>{
            window.removeEventListener("mousemove",handleMouse)
        }
    },[])
    
    // Uncomment [] and try it
    // it render only once for intial render []
  return (
    <div>
        <h1>UseEffectOnlyOnce</h1>
        <h3 className='note'> Note:- We need to specify [] for  only once . it only work on intial render</h3>

        <h2>Mouse X position = {x}</h2>
        <h2>Mouse Y position = {y}</h2>

        <h1>UseEffect clean up</h1>
        <h2>Want to execute cleanup code  include it in function and retutn that function in passed to UseEffect</h2>

        <h3 className='note'> Here, we are removing eventlistener so it wont render after componentWillmount
        ,Uncomment the return function and see the changes</h3>

    </div>
  )
}
