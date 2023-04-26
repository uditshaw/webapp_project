import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Cookies from 'js-cookie';

export default function ProfileSide() {
    const id1= Cookies.get('id')
    const [User,setUser]=React.useState([]);
    const [event, setEvents] = React.useState([]);
    var k=[];
    React.useEffect(()=>{
    let data = fetch("http://localhost:8000/api/v1/userData/getUserById", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({id:id1})
    })
      .then((res) => {
        return res.json();
      })
      .then((d) =>
      {
        k=d.data
         setEvents(k)
      });
    },[])
    console.log(event)
    if(event.length!=0)
    {
  return (
    <Box sx={{ p: 2, border:'none',marginLeft:"10%",boxShadow:"5px 5px 10px 10px #a9d2"}}>
      <div style={{marginLeft:"20px",marginTop:"30vh"}} >
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Name: {event.User[0].name}</Typography>
            <Typography style={{fontSize:"20px",marginTop:"30px"}}>Email:{event.User[0].email} </Typography>
            
        
      </div>
    </Box>
  );
    }
    else
    return<h1>j</h1>
}
