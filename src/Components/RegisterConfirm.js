import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from 'js-cookie';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function RegisterConfirm(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () =>
  { 
    if(Cookies.get('jwtoken')===undefined)
    {console.log("inside")
      window.alert("Please login First");
      window.location.reload(false)
  handleClose()}
    else
    setOpen(true);

  }

  const handleYes = async () => {
    console.log(props.id)
    const res = await fetch("http://localhost:8000/api/v1/userData/AddEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      credentials: 'include',

      body: JSON.stringify({
        "id": Cookies.get('id'),
        "eventId": props.id
      })
    })
    const res1 = await fetch("http://localhost:8000/api/v1/events/AddEventToEvents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      credentials: 'include',

      body: JSON.stringify({
        "id": Cookies.get('id'),
        "eventId": props.id
      })
    })
  window.alert("Register successfull")
handleClose();
window.location.reload(false)}
    if (props.status == "Ongoing") {
      return (
        <div>
          <Button variant='contained' onClick={handleOpen} style={{ marginLeft: "80%", marginTop: "5vh", height: "5vh", color: "white", background: "#af9bba" }} >Register</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography>Are you sure to register?</Typography>
              <Button variant='contained' style={{ marginTop: "5vh", height: "5vh", color: "white", background: "#af9bba", width: "40%" }} onClick={handleYes}  >Yes</Button>
              <Button variant='contained' style={{ marginTop: "5vh", marginLeft: "20px", height: "5vh", color: "white", background: "#af9bba", width: "40%" }} >No</Button>
            </Box>
          </Modal>
        </div>
      );
    }
    else {
      return (
        <div>
          <Typography style={{ color: "red", marginTop: "20px" }}>Registration Closed</Typography>
          <Button variant='contained' disabled={true} onClick={handleOpen} style={{ marginLeft: "80%", marginTop: "5vh", height: "5vh", color: "white", background: "#a3a0a3" }} >Register</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography></Typography>
            </Box>
          </Modal>
        </div>
      );
    }
  }