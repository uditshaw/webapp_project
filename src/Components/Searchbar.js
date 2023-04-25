import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Input, Link, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import EventModal from './EventModal'


const box = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#35383e',
  borderRadius: '20px',
  marginLeft: '40vw'
}
const paper = {
  backgroundColor: 'inherit',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit'
}
const inputbase = {
    backgroundColor: 'inherit',
    color: '#fff',
    borderRadius: '20px',
    height: '40px',
    width: '31vw',
    padding: '7px'
}
const box2 = {
  backgroundColor: "#fff"
}
const card = {
  display:'flex',
  flexDirection:'row',
  backgroundColor: '#fff',
  height: '6vh'
}
const cardmedia = {
  height: '5vh',
  width: '5vw',
  margin: '0.5vh 0 0 0.5vw'
}
const cardcontent = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '0.5rem'
}

const Searchbar = () => {

//Search State Management (AUTHOR : Debargha Mukherjee)
  const [input, setInput] = useState("")


  const [events, setEvents] = useState([])

  const fetchData = (value) => {
    fetch("http://localhost:8000/api/v1/search?name="+value)
      .then((res) => res.json())
      .then(d => {
          setEvents(d.data.Events); 
          console.log(events);
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    fetchData(e.target.value);
  };

  return (
    <>
      <Box sx={box}>
        <Paper sx={paper}>
        <IconButton>
            <SearchIcon sx={{ color: '#dcdcdc' }} />
        </IconButton>
        <Input
          id='search-bar'
          sx={inputbase}
          placeholder='Search for events'
          disableUnderline='true'
          onChange={(e) => handleChange(e) }
        />
        </Paper>
        {input == "" ? (<></>) :
                <Box sx={box2}>
                {events.length ? 
                  events.map(item => (
                  <Link underline='none' href='#'>
                  <Card sx={card}>
                    <CardMedia sx={cardmedia} component='img' image={item.image}></CardMedia>
                    <CardContent sx={cardcontent}>
                      <Typography variant='body1'><b>{item.name}</b></Typography>
                      <Typography variant='body2'><i>({item.status})</i></Typography>
                    </CardContent>
                    <CardActions>
                      <EventModal id={item._id}></EventModal>
                    </CardActions>
                  </Card>
                  </Link>
                  )) :
                  (
                    <Card sx={card}>
                      <Typography variant='body1'><b>Sorry, No results found!</b></Typography>
                    </Card>
                  )
                }
              </Box>

        }
      </Box>
    </>
  )
}

export default Searchbar