import React from 'react'
import Bakery from './BakeryData'
function Task3() {

  return (

    <div>
     <h1>Task3</h1>

     {
      Bakery.map((v,i)=>{
        return(
          <ul key={i}>
           <li>{v.id}</li>
           <li>{v.type}</li>
           <li>{v.name}</li>
           <li>{v.ppu}</li>
          
          {
            v.batters.batter.map((v1,i1)=>{
              
              return(
                <div key={i1}>
                 
                    <li>{v1.id}</li>
                    <li>{v1.type}</li>
                  

                </div>
              )
            })
          }
          {
            v.topping.map((v2,i2)=>{
              return(
               <div key={i2}>
              
                  <li>{v2.id}</li>
                  <li>{v2.type}</li>
                
                


               </div>
              )
            })
          }
           
          </ul>
        )
      })
     }

    
     
    
    </div>
  )
}
export default Task3