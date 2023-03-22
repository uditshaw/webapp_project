import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import getData from '../data/Data';
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

export default function EventModal(props) {
  const [open, setOpen] = React.useState(false);
  const [event,setEvents]=React.useState([{name:""}])
  const handleOpen =async () => 
  {
    let k={}
    let data=await fetch("http://localhost:8000/api/v1/events/"+props.id,{method:'GET',  headers: {"Content-Type": "application/json"}}).then((res)=>{return res.json()}).then((d)=>k=d)
    setOpen(true);
   
    setEvents(k.data.Events)
    }
  

  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Know More</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {event[0].name} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {event[0].status} 
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
