// import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "./EventsCards";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function OngoingEvent(props) {
  const [event, setEvents] = useState([]);
  let data = fetch("http://localhost:8000/api/v1/events/Ongoing", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((d) => setEvents(d.data.Events));
  const events = event.map((item) => (
    <MediaCard items={item} data={event}></MediaCard>
  ));
  return <Carousel responsive={responsive}>{events}</Carousel>;
}
export default OngoingEvent;
