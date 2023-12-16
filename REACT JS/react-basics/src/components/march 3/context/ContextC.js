import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
export class ContextC extends Component {
  render() {
    return (
      <div>
        <h1>ContextC</h1>
        <UserConsumer>
        {
            (user)=>{
                return <h3>Hii this is {user} i render with context API</h3>
            }
        }
        </UserConsumer>
      </div>
    )
  }
}

export default ContextC