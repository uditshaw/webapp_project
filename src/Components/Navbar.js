import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const button ={
  backgroundColor: 'inherit',
  margin: '0px 20px 0px 20px'
};
const buttongroup = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Navbar = () => {
  return (
    <div>
      <ButtonGroup sx={buttongroup}>
        <Link to="/home" style={{ textDecoration: 'none' }}><Button variant='contained' sx={button}>Home</Button></Link>
        <Link to="/events" style={{ textDecoration: 'none' }}><Button variant='contained' sx={button}>Events</Button></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><Button variant='contained' sx={button}>About</Button></Link>
      </ButtonGroup>
    </div>
  )
}

export default Navbar