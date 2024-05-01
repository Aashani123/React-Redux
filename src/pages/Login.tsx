import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { login, logout } from '../store'

const Login = () => {
    
    const[newUser,setNewUser]=useState("")

    const dispatch=useDispatch();
    const username=useSelector((state:any)=>state.user.value.username)

  return (
    <div>
      <h1>{username}</h1>

      <input onChange={(e)=>setNewUser(e.target.value)} />
      <button onClick={()=>dispatch(login({username:newUser}))}>Login</button>
      <button onClick={()=>dispatch(logout())}>Login Out</button>
    </div>
  )
}

export default Login
