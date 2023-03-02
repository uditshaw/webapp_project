import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar