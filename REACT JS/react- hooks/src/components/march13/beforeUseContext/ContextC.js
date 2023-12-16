import React from 'react'
import { UserConsumer ,UserConsumer2} from './NormalContext'
import UseContextExample from '../useContext/UseContextExample'
function ContextC() {
  return (
    <div>
        <h1>ContextC</h1>
        <UserConsumer>
            {
                (user)=>{
                    return (
                    
                    <UserConsumer2>
                           {
                            (admin)=>{
                                return <h1>First Name is {user} Second name is {admin}</h1>
                            }
                           }
                    </UserConsumer2>)
                    
                    
                }
            }
        </UserConsumer>
        <h3 className='note'>Note :- The readablity od code is not great that is why we are going to .... <h3>UseContext</h3></h3>
        <UseContextExample/>
    </div>
  )
}
export default ContextC