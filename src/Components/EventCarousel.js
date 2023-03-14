import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MediaCard from "./EventsCards";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function EventCarousel(props) {
    const events = props.itemss.map((item) =>
        <MediaCard items={item}></MediaCard>
    );
    console.log(events)
    return (
        <Carousel responsive={responsive}>
            {events}
        </Carousel>);
}
export default EventCarousel;