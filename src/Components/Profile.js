import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid, Typography,Item } from '@mui/material';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import MediaCard from './EventsCards';
import ProfileCard from './ProfileCard';
import axios from 'axios';
import CarouselCard from './Carousel';
import { useState } from 'react';
import EventsSideNav from './EventsSideNav'
import ProfileSide from './ProfileSide';
export default function Profile() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
   const id1= Cookies.get('id')
    const [User,setUser]=React.useState([]);
    const [event, setEvents] = useState([]);
    var k=[];
    useEffect(()=>{
    let data = fetch("http://localhost:8000/api/v1/userData/getUsers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({id:id1})
    })
      .then((res) => {
        return res.json();
      })
      .then((d) =>
      {
        k=d.data.k;
         setEvents(k)
      });
    },[])
    
    console.log(event)
    const events = event.map((item) => (
     <ProfileCard id={item}></ProfileCard>
    ));
    return (
      <Box sx={{ flexGrow: 1, marginTop: '10vh',minHeight:'100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
     <ProfileSide></ProfileSide>
          
        </Grid>
        <Grid item xs={12} sm={8}>
        <Box sx={{ flexGrow: 3 }}>
        <Typography style={{fontSize:"30px",marginLeft:"10vh"}}>Your Events</Typography>
      <Grid container spacing={2}>

        {event.map(item => (
          <Grid item xs={12} sm={4}>
          <ProfileCard id={item}></ProfileCard>
          </Grid>
        ))}
      </Grid>
    </Box>
        </Grid>
      </Grid>
    </Box>
    )
  }

