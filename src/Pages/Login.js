
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid,Paper,Avatar, TextField, Checkbox} from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailIcon from '@mui/icons-material/Email';
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
const paperStyle = {padding:20,height:'80vh',width:'60vh',margin:"20px auto"}
    const avatarStyle={background:"#1bbd7e"}
    const style1={marginTop:'10px'}

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

export default function Login(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='contained' style={{marginLeft:"9vh",height:"5vh",color:"black", background:"white"}} onClick={handleOpen}>Login</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Grid >
            <Paper elevation={10} style={paperStyle} > 
            <Button onClick={handleClose} style={{color:"black"}}><CloseIcon></CloseIcon></Button> 
            <Grid align="center">
            <Avatar style={avatarStyle}><AccountBoxIcon></AccountBoxIcon></Avatar>
            <Typography>  <h2 style={{margin:'20px'}} >Sign In</h2></Typography>
          
            </Grid>
            <Button variant="outlined" startIcon={<EmailIcon sx={{ color: red[500] }} />} fullWidth>
SignIn With Gmail
</Button>
<Divider variant="middle" style={{marginTop:'50px'}} >
<Chip label="OR" />
</Divider>
           
            <TextField id="standard-basic"  variant="standard" label='Username' placeholder=" Enter UserName" style={{marginTop:'20px'}} fullWidth required />
            <TextField id="standard-basic" variant="standard" label='Password' placeholder=" Enter Password" style={{marginTop:'20px'}} fullWidth required type="password"/>
            <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            style={{marginTop:'10px',marginBottom:'10px'}}
            label="Remember Me"
          />
        <Button variant="contained" color="success" fullWidth>
 Sign In
</Button>
<Typography style={{marginTop:'15px'}}>
<Link href="#" style={style1}>Forget Password?</Link>
       
</Typography>

         
          
            </Paper>
        </Grid>
      
      </Modal>
    </div>
  );
}
