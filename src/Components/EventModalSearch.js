import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import getData from "../data/Data";
import PlaceIcon from "@mui/icons-material/Place";
import RegisterConfirm from "./RegisterConfirm";
import { Card, CardActions, CardContent, CardMedia, Link } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxSizing: "border-box",
  overflow: "hidden",
  boxShadow: 24,

  p: 4,
};
const h1style = {
  "font-size": "70px",
  fontWeight: 600,
  backgroundImage: "linear-gradient(to left,#517991, #9ba5ab)",
  color: "transparent",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
};

const card = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#fff",
  height: "6vh",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#88cfc1",
  },
};

const cardmedia = {
  height: "5vh",
  width: "5vw",
  margin: "0.5vh 0 0 0.5vw",
};
const cardcontent = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "0.5rem",
};

export default function EventModalSearch(props) {
  const [open, setOpen] = React.useState(false);
  const [event, setEvents] = React.useState([{ name: "" }]);
  const [registerDisabled, setDisabled] = React.useState(true);

  const handleOpen = async (id) => {
    let k = {};
    let data = await fetch("http://localhost:8000/api/v1/events/" + id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => (k = d));

    setOpen(true);
    setEvents(k.data.Events);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Link
        underline="none"
        onClick={() => {
          handleOpen(props.item._id);
        }}
      >
        <Card sx={card}>
          <CardMedia
            sx={cardmedia}
            component="img"
            image={`http://localhost:8000/uploads/${props.item.image}`}
          ></CardMedia>
          <CardContent sx={cardcontent}>
            <Typography variant="body1">
              <b>{props.item.name}</b>
            </Typography>
            <Typography variant="body2">
              <i>({props.item.status})</i>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={h1style}
          >
            {event[0].name}
          </Typography>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{ width: "70%" }}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <p style={{ wordWrap: "break-word", lineHeight: "3" }}>
                  {event[0].description}{" "}
                </p>
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={{ marginTop: "10vh" }}
              >
                {event[0].department}
              </Typography>
            </div>
            <div
              style={{ display: "flex", marginLeft: "60px", color: "#9aa6ad" }}
            >
              <PlaceIcon></PlaceIcon>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {event[0].location}
              </Typography>
            </div>
          </div>
          <RegisterConfirm
            status={event[0].status}
            id={event[0]._id}
          ></RegisterConfirm>
        </Box>
      </Modal>
    </div>
  );
}
