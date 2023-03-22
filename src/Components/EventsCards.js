import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EventModal from './EventModal'

export default function MediaCard (props) {
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.items.image}
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {props.items.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.items.description}
          </Typography>
        </CardContent>
        <CardActions>
<EventModal id={props.items._id}></EventModal>
        </CardActions>
      </Card>
    </div>
  )
}
