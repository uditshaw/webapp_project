import { Typography } from "@mui/material";
import React from "react";
import CarouselCard from "./Carousel";

import OngoingEvent from "./OngoingEvents";
import UpcomingEvent from "./UpcomingEvents";
import PastEvent from "./PastEvents";
const Home = () => {
  return (
    <div style={{ marginTop: "7vh" }}>
      <CarouselCard></CarouselCard>
      <Typography>
        <h2 style={{ marginBottom: 30 }}>Ongoing Events</h2>
      </Typography>
      <OngoingEvent></OngoingEvent>
      <Typography>
        <h2 style={{ marginBottom: 30 }}>Upcoming Events</h2>
      </Typography>
      <UpcomingEvent></UpcomingEvent>
      <Typography>
        <h2 style={{ marginBottom: 30 }}>Past Events</h2>
      </Typography>
      <PastEvent></PastEvent>
    </div>
  );
};

export default Home;
