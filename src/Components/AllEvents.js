import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import MediaCard from './EventsCards'
import { useState } from 'react'
import 'react-multi-carousel/lib/styles.css'
import Cookies from 'js-cookie'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
function AllEvents (props) {
  const [event, setEvents] = useState([])
  useEffect(()=>{
  let data = fetch(`http://localhost:8000/api/v1/events/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({department:props.department,status:props.status})
  })
    .then(res => {
      return res.json()
    })
    .then(d => setEvents(d.data.Events))
  },[]);
  console.log(Cookies.get('jwtoken'));
  return (
    <Box sx={{ flexGrow: 3 }}>
      <Grid container spacing={2}>
        {event.map(item => (
          <Grid item xs={12} sm={4}>
            <MediaCard items={item}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default AllEvents
