import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ButtonGroup variant='contained'>
        <Button><Link to="/home">Home</Link></Button>
        <Button><Link to="/events">Events</Link></Button>
        <Button><Link to="/about">About</Link></Button>
      </ButtonGroup>
    </div>
  )
}

export default Navbar