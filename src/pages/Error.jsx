import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>404 Error</h1>
        <h4>Page Not Found</h4>
        <Link to="/">Go back Home</Link>
    </div>
  )
}

export default Error