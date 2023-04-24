import React, { useEffect, useState } from 'react'
import { Typography, Link, Modal } from '@mui/material'
import { SpaTwoTone } from '@mui/icons-material';
import OTPBox from './OTPBox';

const span = {
    color: "red",
    fontWeight: "bold",
    paddingLeft: "5px"
}

const CountdownTimer = ({name, email, password, passwordConfirm}) => {

  const [ minutes, setMinutes ] = useState(2);
  const [ seconds, setSeconds ] = useState(0);

  // RESEND OTP AUTHENTICATION BOX
  const [respStatus, setRespStatus] = React.useState("");
  const [reMsg, setRegMsg] = React.useState("");
  const [openOtpBox, setOpenOtpBox] = React.useState(false);
  const handleShowOtpBox = () => setOpenOtpBox(true);
  const handleHideOtpBox = () => setOpenOtpBox(false);
  
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
          "passwordConfirm": passwordConfirm
        })
      })
       .then(res => {return res.json();})
       .then(user => {
          setRegMsg(user.message);
          setRespStatus(user.status);
          if(user.status === "pending"){
            handleShowOtpBox();
          }
        });
  }

  useEffect(() => {
    const interval = setInterval(() => {
        updateRemainingTime(interval);
    }, 1000)

    return () => clearInterval(interval);
  }, [seconds])

  const updateRemainingTime = (interval) => {
    if (seconds > 0) {
        setSeconds(seconds-1);
    }
    if(seconds === 0) {
        if(minutes === 0){
            clearInterval(interval);
        } else{
            setSeconds(59);
            setMinutes(minutes-1);
        }
    }
  }
  return (
    <div>
        { seconds > 0 || minutes > 0 ? (
            <Typography>
                OTP will expire in
                <span style={span}>
                    {minutes < 10 ? `0${minutes}` : minutes}:
                    {seconds < 10 ? `0${seconds}` : seconds}
                </span>
            </Typography>
        ) : (
            <Typography>
                Didn't recieve the OTP? 
                <Link onClick={handleSubmit}>
                    Resend OTP
                </Link>
                <Modal open={openOtpBox} onClose={handleHideOtpBox}> 
                    <OTPBox name={name} email={email} password={password} passwordConfirm={passwordConfirm}/>
                </Modal>
            </Typography>
        )}
    </div>
  )
}

export default CountdownTimer