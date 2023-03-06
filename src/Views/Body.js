import { Card } from '@mui/material';
import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import About from '../Components/About';
import Events from '../Components/Events';
import Home from '../Components/Home';

const card = {
  backgroundColor: '#e8d9b7',
  marginTop: '5px',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  height: '87vh'
};

const Body = () => {
  return (
    <div>
      <Card sx={card}>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/events' element={<Events/>}></Route>
            </Routes>
      </Card>
    </div>
  )
}

export default Body
