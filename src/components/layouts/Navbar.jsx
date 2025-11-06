import React from 'react'
import './layout.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mini-projects">Mini Projects</NavLink>
    </nav>
  )
}

export default Navbar