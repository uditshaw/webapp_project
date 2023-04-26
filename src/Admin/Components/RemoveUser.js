import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function RemoveUser(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => 
  {
    console.log(props.id);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const handleYes=(event)=>{
    
    let data = fetch(`http://localhost:8000/api/v1/userData/removeUser`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify({id:props.id})
    })

  }

  return (
    <div>
    <Button  onClick={handleOpen} >Remove</Button>
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={style}>
            <Typography>Are you sure to Delete User?</Typography>
            <Button variant='contained' style={{marginTop:"5vh",height:"5vh",color:"white",width:"40%"}} onClick={handleYes}>Yes</Button>
            <Button variant='contained'  style={{marginTop:"5vh",marginLeft:"20px",height:"5vh",color:"white",width:"40%"}} onClick={handleClose} >No</Button>
        </Box>
    </Modal>
    </div>
  );
}
