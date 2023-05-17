import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EventModal from './EventModal'
import { useEffect } from 'react'
export default function ProfileCard (props) {
    const [Event,setEvent]=React.useState([]);
var k=[];

   useEffect(()=>
   { let data = fetch(`http://localhost:8000/api/v1/events/getEvents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: props.id}),
      })
      .then(res => {
        return res.json()
      })
      .then(d => {
         k=d.data.Events
         setEvent(k)
      }
        )
    },[]
   )
    console.log(Event);
    if(Event.length!=0)
    {
  return (
    <div>
      <Card sx={{ maxWidth: 345 ,marginTop:"10vh"}}>
   
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {Event[0].name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {Event[0].description}
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
  )
    }
    else
    return<h1>j</h1>

}
