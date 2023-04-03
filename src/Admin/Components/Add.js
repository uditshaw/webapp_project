import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
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

export default function Delete(props) {
  const [open, setOpen] = React.useState(false);
  const [name,setName]=React.useState();
  const [location,setLocation]=React.useState();
  const [department,setDepartment]=React.useState();
  const [status,setStatus]=React.useState();
  const [description,setDescription]=React.useState();
  const handleName=(event)=>
{
    setName(event.target.value);

}
const handleStatus=(event)=>
{
    setStatus(event.target.value);

}
const handleLocation=(event)=>
{
    setLocation(event.target.value);

}
const handleDepartment=(event)=>
{
    setDepartment(event.target.value);

}
const handleDescription=(event)=>
{
    setDescription(event.target.value);

}
  const handleOpen = () => 
  {
    setOpen(true);
  }
  const handleClose = () => 
  {
      let data = fetch(`http://localhost:8000/api/v1/events/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({name,location,department,status,description})})

    setOpen(false);
  }
  const handleClose1 = () => 
  {

    setOpen(false);
  }
  const handleYes=(event)=>{
    
    // let data = fetch(`http://localhost:8000/api/v1/events/delete`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body:JSON.stringify({id:props.id})
    
  }

  return (
    <div>
    <Button  onClick={handleOpen} style={{marginLeft:"80%"}} ><AddIcon></AddIcon><h4 style={{marginLeft:"5px"}}>Create Event</h4></Button>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
 <Box sx={style}>
      <TextField style={{marginTop:"20px",width:"100%"}} onChange={handleName} label="Event Name"></TextField>
      <TextField  style={{marginTop:"20px",width:"100%"}} onChange={handleDescription} label="Description"></TextField>
      <TextField   style={{marginTop:"20px",width:"100%"}} onChange={handleDepartment} label="Department"></TextField>
      <TextField style={{marginTop:"20px",width:"100%"}} onChange={handleStatus} label="Status"></TextField>
      <TextField  style={{marginTop:"20px",width:"100%"}} onChange={handleLocation} label="Location" ></TextField>
      <Button variant="contained" style={{marginTop:"5%",width:"50%"}} onClick={handleClose}>Add</Button>
      <Button variant="contained" style={{marginTop:"5%",width:"50%"}} onClick={handleClose1} >Cancel</Button>
    </Box>
  </Modal>
</div>
  );
}
