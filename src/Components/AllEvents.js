import React from "react";
import { Box,Grid } from "@mui/material";
import MediaCard from "./EventsCards";
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
 function AllEvents(){
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {
                items.map((item)=>
                    <Grid item xs={4}>
                        <MediaCard items={item}></MediaCard>
                    </Grid>
                )
            }
        </Grid>
      </Box>
    )
 }
 export default AllEvents;