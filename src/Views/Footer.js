import { Box } from '@mui/material'
import React from 'react'

const box = {
  backgroundColor: '#38342b',
  padding:"0px",
  color: '#fff',
  width: '100%',
  height: '10vh',
  alignContent:'center'
}

const Footer = () => {
  return <Box sx={box}>All rights Reserved</Box>
}

export default Footer
