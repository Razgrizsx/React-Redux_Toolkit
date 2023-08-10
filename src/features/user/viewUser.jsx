import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

const ViewUser = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  },[])
  return (
    <div>
        <h2>List of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
        {!user.loading && !user.error ? 
        <div>
          {user.users.map(e=>
          <div key={e.id}>{e.name}</div>
          )}
        </div> 
        : null}
    </div>
  )
}

export default ViewUser