import { Button, Card, CardActions, CardContent, CardMedia, List, Paper, Typography } from '@mui/material'
import React from 'react'

const paper = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'inherit',
  maxHeight: '100%',
  overflow: 'auto',
};
const list = {
}

const card = {
  display: 'flex',
  justifyContent: 'flex-start',
  height: '30vh',
  width: '95vw',
  margin: '1.5vh 1vh 1vh 1vh',
};

const cardmedia = {
  width: '25vw'
};
const cardcontent ={
  width: '60vw',
};
const cardactions = {
  width: '5vw',
}

const Events = () => {
  return (
    <div>
      <Typography variant='h5'>Upcoming Events</Typography>
      <Paper sx={paper}>
        <List sx={list}>
        <Card sx={card}>
          <CardMedia sx={cardmedia} component='img' image='https://cdn.kiit.ac.in/wp-content/uploads/2019/11/fest6-700x441.jpg' alt='event1'></CardMedia>
          <CardContent sx={cardcontent}>
          <Typography variant='h6'>KIIT-FEST</Typography>
          <Typography variant='body1'>An annual festival organized for 5 days.It is one of the largest Festivals of the Eastern paradise of India. The year 2019 will witness the 6th edition of KIITFEST and shall take place from 16th to 18th of December with the Theme, ‘TRIBAL PRIDE’ to make more people aware of the rich history and cultural significance of the tribes in India.</Typography>
          </CardContent>
          <CardActions sx={cardactions}><Button>VIEW DETAILS</Button></CardActions>
        </Card>
        <Card sx={card}>
          <CardMedia sx={cardmedia} component='img' image='https://cdn.kiit.ac.in/wp-content/uploads/2019/11/fest6-700x441.jpg' alt='event1'></CardMedia>
          <CardContent sx={cardcontent}>
          <Typography variant='h6'>KIIT-FEST</Typography>
          <Typography variant='body1'>An annual festival organized for 5 days.It is one of the largest Festivals of the Eastern paradise of India. The year 2019 will witness the 6th edition of KIITFEST and shall take place from 16th to 18th of December with the Theme, ‘TRIBAL PRIDE’ to make more people aware of the rich history and cultural significance of the tribes in India.</Typography>
          </CardContent>
          <CardActions sx={cardactions}><Button>VIEW DETAILS</Button></CardActions>
        </Card>
        <Card sx={card}>
          <CardMedia sx={cardmedia} component='img' image='https://cdn.kiit.ac.in/wp-content/uploads/2019/11/fest6-700x441.jpg' alt='event1'></CardMedia>
          <CardContent sx={cardcontent}>
          <Typography variant='h6'>KIIT-FEST</Typography>
          <Typography variant='body1'>An annual festival organized for 5 days.It is one of the largest Festivals of the Eastern paradise of India. The year 2019 will witness the 6th edition of KIITFEST and shall take place from 16th to 18th of December with the Theme, ‘TRIBAL PRIDE’ to make more people aware of the rich history and cultural significance of the tribes in India.</Typography>
          </CardContent>
          <CardActions sx={cardactions}><Button>VIEW DETAILS</Button></CardActions>
        </Card>
        <Card sx={card}>
          <CardMedia sx={cardmedia} component='img' image='https://cdn.kiit.ac.in/wp-content/uploads/2019/11/fest6-700x441.jpg' alt='event1'></CardMedia>
          <CardContent sx={cardcontent}>
          <Typography variant='h6'>KIIT-FEST</Typography>
          <Typography variant='body1'>An annual festival organized for 5 days.It is one of the largest Festivals of the Eastern paradise of India. The year 2019 will witness the 6th edition of KIITFEST and shall take place from 16th to 18th of December with the Theme, ‘TRIBAL PRIDE’ to make more people aware of the rich history and cultural significance of the tribes in India.</Typography>
          </CardContent>
          <CardActions sx={cardactions}><Button>VIEW DETAILS</Button></CardActions>
        </Card>
        <Card sx={card}>
          <CardMedia sx={cardmedia} component='img' image='https://cdn.kiit.ac.in/wp-content/uploads/2019/11/fest6-700x441.jpg' alt='event1'></CardMedia>
          <CardContent sx={cardcontent}>
          <Typography variant='h6'>KIIT-FEST</Typography>
          <Typography variant='body1'>An annual festival organized for 5 days.It is one of the largest Festivals of the Eastern paradise of India. The year 2019 will witness the 6th edition of KIITFEST and shall take place from 16th to 18th of December with the Theme, ‘TRIBAL PRIDE’ to make more people aware of the rich history and cultural significance of the tribes in India.</Typography>
          </CardContent>
          <CardActions sx={cardactions}><Button>VIEW DETAILS</Button></CardActions>
        </Card>
        </List>
      </Paper>
    </div>
  )
}

export default Events