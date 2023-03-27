import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Edit(props) {
    const [name,setName]=React.useState(props.data.name);
    const [location,setLocation]=React.useState(props.data.location);
    const [department,setDepartment]=React.useState(props.data.department);
    const [status,setStatus]=React.useState(props.data.status);
    const [description,setDescription]=React.useState(props.data.description);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
const handleEdit=()=>{
    console.log(props.data._id)
    let data = fetch(`http://localhost:8000/api/v1/events/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({query:{_id:props.data._id},param:{name:name,location:location,department:department,status:status,description:description}})
      })
      handleClose();

}
  return (
    <div>
    <Button  onClick={handleOpen} >Edit</Button>
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <TextField defaultValue={name} style={{marginTop:"20px",width:"100%"}} onChange={handleName}></TextField>
      <TextField defaultValue={props.data.description} style={{marginTop:"20px",width:"100%"}} onChange={handleDescription}></TextField>
      <TextField  defaultValue={props.data.department} style={{marginTop:"20px",width:"100%"}} onChange={handleDepartment}></TextField>
      <TextField  defaultValue={props.data.status} style={{marginTop:"20px",width:"100%"}} onChange={handleStatus}></TextField>
      <TextField  defaultValue={props.data.location} style={{marginTop:"20px",width:"100%"}} onChange={handleLocation} ></TextField>
      <Button variant="contained" style={{marginTop:"5%",width:"50%"}} onClick={handleEdit}>Edit</Button>
      <Button variant="contained" style={{marginTop:"5%",width:"50%"}} onClick={handleClose} >Cancel</Button>
    </Box>
  </Modal>
</div>
  );
}
