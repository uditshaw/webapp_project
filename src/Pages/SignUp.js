
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Grid,Paper,Avatar, TextField, Checkbox, Alert, Snackbar} from "@mui/material"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import OTPBox from '../Components/OTPBox';

const paperStyle = {padding:20,height:'80vh',width:'60vh',margin:"20px auto"}
    const avatarStyle={background:"#1bbd7e"}
    const style1={marginTop:'10px'}

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function SignUp(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = (e, reason) => {
    if(reason && reason == "backdropClick")
      return;
    setOpen(false);
  }

  // Form Data States
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  
  const [respStatus, setRespStatus] = React.useState("");
  const [regMsg, setRegMsg] = React.useState("");

  // OTP AUTHENTICATION BOX
  const [openOtpBox, setOpenOtpBox] = React.useState(false);
  const handleShowOtpBox = () => setOpenOtpBox(true);
  const handleHideOtpBox = (e, reason) => {
    if(reason && reason == "backdropClick")
      return;
    setOpenOtpBox(false);
  }

  const handleSubmit = async(e) => {
    let data = await fetch("http://localhost:8000/api/v1/users/register",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
        "passwordConfirm": passwordConfirm,
        "isAdmin": "no"
      })
    })
     .then(res => {return res.json();})
     .then(user => {
        setRegMsg(user.message);
        setRespStatus(user.status);
        console.log(user.status);
        if(user.status === "pending"){
          handleShowOtpBox();
        }
      });
  }

  return (
    <div>
      <Button
        variant="contained"
        style={{
          marginRight: "2vw",
          height: "5vh",
          color: "black",
          background: "white",
        }}
        onClick={handleOpen}
      >
        SignUp
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Button onClick={handleClose} style={{ color: "black" }}>
              <CloseIcon></CloseIcon>
            </Button>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AccountBoxIcon></AccountBoxIcon>
              </Avatar>
              <Typography>
                {" "}
                <h2 style={{ margin: "20px" }}>SignUp</h2>
              </Typography>
            </Grid>

            <TextField value={name} id="name"  variant="standard" label='Name' placeholder=" Enter Name" 
            style={{marginTop:'20px'}} fullWidth required onChange={(e) => setName(e.target.value)} />           
            <TextField value={email} id="email"  variant="standard" label='Email ID' placeholder=" Enter Email" 
            style={{marginTop:'20px'}} fullWidth required onChange={(e) => setEmail(e.target.value)} />
            <TextField value={password} id="pass" variant="standard" label='Password' placeholder=" Enter Password" 
            style={{marginTop:'20px'}} fullWidth required type="password" onChange={(e) => setPassword(e.target.value)} />
            <TextField value={passwordConfirm} id="passConf" variant="standard" label='Confirm Password'
            placeholder=" Enter Confirm Password" style={{marginTop:'20px'}} fullWidth required type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
            <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            style={{marginTop:'10px',marginBottom:'10px'}}
            label="Remember Me"
          />

          {(() => {
              switch (respStatus) { 
              case "failed":
                return <Alert severity="error">{regMsg}</Alert>;
              case "pending":
                return <Alert severity="success">{regMsg}</Alert>;
              default:
                return <></>;
              }
            })()
          }
          <Button onClick={handleSubmit} variant="contained" color="success" fullWidth>
            Send otp
          </Button>
          <Modal
            open={openOtpBox}
            onClose={handleHideOtpBox}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // hideBackdrop='true'
          > 
            <OTPBox name={name} email={email} password={password} passwordConfirm={passwordConfirm}/>
          </Modal>
          {/* <Typography style={{marginTop:'15px'}}>
            <Link href="/Login" style={style1}>Already have a account? Login</Link>
            
          </Typography> */}
          </Paper>
         </Grid>
      </Modal>
    </div>
  );
}
