import React from "react";
import Carousel from "react-material-ui-carousel";
import {Paper,Button} from '@mui/material'

function CarouselCard(props)
{
    var items=[{
        image:"https://cdn.kiit.ac.in/wp-content/uploads/2018/07/KIIT-Campus-Front-Library.jpg"
    },{
        image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    }]
    return(
    <Carousel>
        {items.map((item,i)=><Item key={i} item={item}></Item>)}

    </Carousel>
)
    }
    function Item(props)
    {
        return(<Paper>
            <img src={props.item.image} width="100%" height="500vh"></img>
        </Paper>)
    }
    export default CarouselCard;