import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import getData from '../data/Data';
import PlaceIcon from '@mui/icons-material/Place';
const style = {
  position: 'absolute',
  top: '50%',
  left:'50%',
  width:'50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxSizing:"border-box",
  overflow:"hidden",
  boxShadow: 24,

  p: 4,
};
const h1style={
  "font-size": "70px",
  fontWeight: 600,
  backgroundImage: "linear-gradient(to left,#517991, #9ba5ab)",
  color: "transparent",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
}

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
          <Typography id="modal-modal-title" variant="h6" component="h2" style={h1style}>
           {event[0].name} 
          </Typography>
          <div style={{display:"flex",justifyContent:"flex-start"}}>
            <div style={{width:'70%'}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
          <p style={{wordWrap: "break-word",lineHeight:"3"}}>{event[0].description} </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{marginTop:"10vh"}}>
          {event[0].department} 
          </Typography>
          </div>
          <div style={{display:'flex',marginLeft:'60px',color:"#9aa6ad"}}>
          <PlaceIcon></PlaceIcon>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           {event[0].location} 
          </Typography>
   
       
          </div>
          
          </div>
          <Button variant='contained' style={{marginLeft:"80%",marginTop:"5vh",height:"5vh",color:"white", background:"#af9bba"}} onClick={handleOpen}>Register</Button>
        </Box>
      </Modal>
    </div>
  );
}
