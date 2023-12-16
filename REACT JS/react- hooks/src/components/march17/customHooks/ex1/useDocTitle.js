import React,{useEffect}from 'react'

function useDocTitle(count) {
    useEffect(()=>{
        document.title = `Cliked ${count}`
     },[count])  
}

export default useDocTitle