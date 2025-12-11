import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <h1>Home Page</h1>
        <button className='btn' onClick={() => navigate(`/users/${10}`, { state: { userId: 10 } })}>Users</button>
    </div>
  )
}

export default Home