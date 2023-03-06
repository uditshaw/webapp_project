import { Button, ButtonGroup, Card, CardActions, CardContent, IconButton, InputBase, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar';
// import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';

const card = {
  backgroundColor: '#38342b',
  color: '#d49c1e',
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  height: '10vh',
  // alignItems: 
};
const cardcontent = {
  display: 'flex',

};
const cardactions = {
  display: 'flex',
  backgroundColor: 'black',
  width: '64vw'
};
const inputbase = {
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  height: '40px',
  width: '34vw',
  padding: '7px'
};
const button = {
  margin: '10px 5px'
};

const Banner = () => {

  // const classes = useStyles();
  return (
    <div>
        <Card sx={card}>
          <CardContent sx={cardcontent}>
            {/* <IconButton><MenuIcon /></IconButton> */}
            <Typography variant='h6'>K-VENT MANAGER</Typography>
          </CardContent>
          <CardActions sx={cardactions}>
            <Navbar />
            <InputBase sx={inputbase} placeholder="Search for events"  inputProps={{ 'aria-label': 'search event' }} />
          </CardActions>
              <Button variant='contained' sx={button}>Login</Button>
              <Button variant='contained' sx={button}>Sign Up</Button>
        </Card>
    </div>
  )
}

export default Banner