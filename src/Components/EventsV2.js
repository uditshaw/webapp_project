import * as React from 'react'
import EventsSideNav from './EventsSideNav'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AllEvents from './AllEvents'
import UpcomingEvents from './UpcomingEvents'
import OngoingEvents from './OngoingEvents'
import PastEvents from './PastEvents'
import { useState } from 'react'
const drawerWidth = 240

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function EventsV2 () {

  const [status,setStatus]=React.useState(" ");
  const [Department,setDepartment]=React.useState(" ");
  const filterStatus1=(event)=>{
    setStatus(event);

  }
  const filterDepartment1=(event)=>{
    setDepartment(event);

  }
  if(status=="Ongoing")
  {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '10vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <Item>
            <EventsSideNav filterStatus={filterStatus1} filterDepartment={filterDepartment1}></EventsSideNav>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
    <AllEvents status="Ongoing" department={Department}></AllEvents>
        </Grid>
      </Grid>
    </Box>
  )
}
else if(status=="Upcoming")
{
  return (
    <Box sx={{ flexGrow: 1, marginTop: '10vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <Item>
            <EventsSideNav filterStatus={filterStatus1} filterDepartment={filterDepartment1}></EventsSideNav>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
      <AllEvents status="Upcoming" department={Department}></AllEvents>
        </Grid>
      </Grid>
    </Box>
  )
}
else if(status=="Past")
{
  return (
    <Box sx={{ flexGrow: 1, marginTop: '10vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <Item>
            <EventsSideNav filterStatus={filterStatus1} filterDepartment={filterDepartment1}></EventsSideNav>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
     <AllEvents status="Past" department={Department}></AllEvents>
        </Grid>
      </Grid>
    </Box>
  )
}
else
{
  return (
    <Box sx={{ flexGrow: 1, marginTop: '10vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <Item>
            <EventsSideNav filterStatus={filterStatus1} filterDepartment={filterDepartment1}></EventsSideNav>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <AllEvents status={status} department={Department}></AllEvents>
        </Grid>
      </Grid>
    </Box>
  )
}


}