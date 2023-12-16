import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../redux'

export const UserContainer = ({userData,fetchUsers}) => {

  useEffect(()=>{
   fetchUsers()
  },[])
  // return <div>
  //   {
  //     userData.users.map(val=> <p>{val.name}</p>)
  //   }
  // </div>

  return userData.loading ? (<h2>Loading ...........</h2>) : 
  userData.error ? (<h2>{userData.error}</h2> ): (<div>
    <h1>UserList  with redux-thunk </h1>
    <div>
      {
        userData && userData.users && userData.users.map((user)=>{
          return <h3 key={user.id}>{user.name}</h3>
        })
      }

    </div>
  </div>)
}

const mapStateToProps = (state) => {
   return{
    userData : state.user
   }
}

const mapDispatchToProps = (dispatch)=>{
   return{
    fetchUsers: ()=>dispatch(fetchUsers())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)