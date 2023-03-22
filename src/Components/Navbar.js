import { Button, ButtonGroup } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  InputBase,
  Paper,
  IconButton
} from '@mui/material'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import DrawerComp from '../Components/DrawerComp'

const button = {
  backgroundColor: 'inherit',
  margin: '0px 20px 0px 20px'
}
const buttongroup = {
  display: 'flex',
  justifyContent: 'space-around'
}

const Navbar = () => {
  const [value, setValue] = useState()
  return (
    <Tabs
      textColor='inherit'
      value={value}
      onChange={(e, value) => {
        setValue(value)
      }}
      indicatorColor='secondary'
    >
      <Tab variant='contained' sx={button}>
        Home
      </Tab>
      <Link to='/events' style={{ textDecoration: 'none' }}>
        <Tab variant='contained' sx={button}>
          Events
        </Tab>
      </Link>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <Tab variant='contained' sx={button}>
          About
        </Tab>
      </Link>
    </Tabs>
  )
}

export default Navbar
