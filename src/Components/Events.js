import React from "react";
import ImgMediaCard from "../Common/newEventCard";
import Grid from "@mui/material/Grid";

const Events = () => {
  return (
    <div classname="events-container">
      Events
      <Grid container="card-list-container" spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ImgMediaCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default Events;
