import React, { useState } from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Alert, Button, Card, CardActions, CardContent, CardHeader, Modal, Snackbar, Typography } from '@mui/material'
import CountdownTimer from './CountdownTimer';

const style = {
    padding:20,
    height:'36vh',
    width:'30vw',
    margin:"30vh auto",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
};

// const snackbar = {
//     backgroundColor: "green",
//     color: "#000"
// }

const OTPBox = ({name, email, password, passwordConfirm}) => {
  const [otp, setOtp] = useState('')

  //OTP RESPONSE STATUS & MESSAGE
  const [respStatus, setRespStatus] = useState("");
  const [regMsg, setRegMsg] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  // SNACKBAR FOR SUCCESS
  const [ openSnackbar, setOpenSnackbar ] = useState(false);
  

  const handleSubmit = async (e) => {
    let data = await fetch("http://localhost:8000/api/v1/users/verifyOTP",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "otp": otp,
          "data": {
            "name": name,
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm
          }
        })
    })
    .then(res => {
        return res.json();
    })
    .then(user => {
        console.log(user.message);
        setRespStatus(user.status);
        setRegMsg(user.message);
        if(user.status === "success") {
          setOpenSnackbar(true);
          window.location.reload();
        }
    })
  }

  return (
    <>
    {/* <Button variant='contained' onClick={handleShowOtpBox}>Send Otp</Button>
    <Modal
        open={openOtpBox}
        onClose={handleHideOtpBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop='true'
    > */}
        <Card style={style}>

          <CardHeader title="Verify your OTP" sx={{backgroundColor: "#c7b6b5", width: "100%"}}/>
          <CardContent>
            <Typography variant='body2'>A OTP (One-Time Password) has been sent to your registered email id <b>{email}</b>.Please enter to complete the process:</Typography>
            <MuiOtpInput value={otp} onChange={handleChange} />
            <CountdownTimer name={name} email={email} password={password} passwordConfirm={passwordConfirm}/>
            {respStatus === "failed" ? (
              <Alert severity='error'>{regMsg}</Alert>
            ):(
              <></>
            )}
          </CardContent>
          <CardActions>
            <Button variant='contained' color='primary' onClick={handleSubmit}>Verify</Button>
          </CardActions>
        </Card>
        { respStatus === "success" ? (
          <Snackbar open={openSnackbar} autoHideDuration={10000} onClose={()=> setOpenSnackbar(false)}>
            <Alert severity='success' variant='filled' sx={{width: '100%'}}>
              {regMsg}
            </Alert>
          </Snackbar>
        ) : (
          <></>
        )}
    </> 
  )
}

export default OTPBox;