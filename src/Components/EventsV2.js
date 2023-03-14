import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EventsSideNav from './EventsSideNav';
import Home from './Home';
import MediaCard from './EventsCards';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AllEvents from './AllEvents';

const drawerWidth = 240;
var items=[
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    },
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    },
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    },
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    },
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    },
    {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    }, {
      name:"Event",
      description:"Events is live",
      image:"https://th-i.thgim.com/public/brandhub/pq60lp/article53456345.ece/alternates/FREE_1200/KIIT-Arial-photo-HD"
    }
  ]
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function EventsV2() {
  return (
         <Box sx={{ flexGrow: 1,marginTop:"20vh" }}>
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <Item><EventsSideNav></EventsSideNav></Item>
        </Grid>
        <Grid item xs={9}>
         <AllEvents></AllEvents>
        </Grid>
      </Grid>
    </Box>
  );
}
