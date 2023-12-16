import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {

  const user =useSelector((state)=>state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  console.log(user)
  return (
    <div>
        <h2>UserList</h2>
        {user.loading && <p>Loading.................</p>}

        {!user.loading &&  user.error ? <p>Error{user.error}</p>: null}
        <ul>
          {
            user.users.map((user)=>{
              return <li key={user.id}>{user.name}</li>
            })
          }
        </ul>
    </div>
  )
}

export default UserView