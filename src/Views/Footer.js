import { Box } from '@mui/material'
import React from 'react'

const box = {
  backgroundColor: '#0f223d',
  color: '#fff',
  width: '100%',
  height: '10vh'
};

const Footer = () => {
  return (
    <div>
      <Box sx={box}>Footer</Box>
    </div>
  )
}

export default Footer