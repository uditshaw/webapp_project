import * as React from 'react'
import EventsSideNav from './EventsSideNav'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import AllEvents from './AllEvents'

const drawerWidth = 240
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default function EventsV2 () {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '10vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4}>
          <Item>
            <EventsSideNav></EventsSideNav>
          </Item>
        </Grid>
        <Grid item xs={12} sm={8}>
          <AllEvents></AllEvents>
        </Grid>
      </Grid>
    </Box>
  )
}
