import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function TotalEvent() {
  return (
    <Box component="span" sx={{ p: 2, border:'none',marginLeft:"10%",boxShadow:"5px 5px 10px 10px #a9d2"}}>
      <div style={{display:"flex"}}>
        <div >
            <Typography style={{fontSize:"35px",marginTop:"30px"}}>Total Events</Typography>
        <Typography  style={{fontSize:"35px",marginLeft:"50%"}}>05</Typography>
        </div>
        <div style={{marginLeft:"100px"}}>
        <div style={{display:"flex",marginTop:"20px"}}>
            <Typography>Upcoming Events:</Typography>
            <Typography>05</Typography>
        </div>
        <div style={{display:"flex",marginTop:"20px"}}>
            <Typography>Upcoming Events:</Typography>
            <Typography>05</Typography>
        </div>
        <div style={{display:"flex",marginTop:"20px"}}>
            <Typography>Upcoming Events:</Typography>
            <Typography>05</Typography>
        </div>
        </div>
      </div>
    </Box>
  );
}
