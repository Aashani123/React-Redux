import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

    const username=useSelector((state:any)=>state.user.value.username)

  return (
    <div>
      <h1>
        Hi {username}<br/>
        This is Home page
      </h1>
    </div>
  )
}

export default Home
