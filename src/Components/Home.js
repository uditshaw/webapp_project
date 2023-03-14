import { Typography } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselCard from './Carousel'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MediaCard from './EventsCards';
import EventCarousel from './EventCarousel';
var items=[
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  },
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  },
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  },
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  },
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  },
  {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  }, {
    name:"Event",
    description:"Events is live",
    image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
  }
]
const Home = () => {
  return (
    <div style={{marginTop:"5vh"}}>
  <CarouselCard></CarouselCard>
  <Typography><h2>Ongoing Events</h2></Typography>
  <EventCarousel itemss={items}></EventCarousel>
  <Typography><h2>Upcoming Events</h2></Typography>
  <EventCarousel itemss={items}></EventCarousel>
  <Typography><h2>Past Events</h2></Typography>
  <EventCarousel itemss={items}></EventCarousel>
      </div>
  )
}

export default Home