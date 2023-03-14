

import React from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme, InputBase, Paper, IconButton, Box } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from "../Components/DrawerComp";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import About from "../Components/About";
import Home from "../Components/Home";
import EventsV2 from "../Components/EventsV2";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const card = {
  backgroundColor: '#38342b',

  // alignItems: 
};
const paper = {
  display: 'flex',
  backgroundColor: '#35383e',
  borderRadius: '20px'
};
const inputbase = {
  backgroundColor: 'inherit',
  color: '#fff',
  borderRadius: '20px',
  height: '40px',
  width: '31vw',
  padding: '7px'
};

const Pages = ["Home", "Events", "About US"]
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar sx={card}>
        <Toolbar>

          {isMatch ? (
            <>
              <DrawerComp></DrawerComp>
              <Typography>
                K-Event
              </Typography>

            </>
          ) : (
            <div style={{ display: "flex", justifyContent: "left" }}>
              <Typography>K-VENT MANAGER</Typography>
              <Tabs style={{ marginLeft: "5vw" }} textColor="inherit" value={value} onChange={handleChange} indicatorColor="secondary">
                {
                  Pages.map((pages, index) => (

                    <Tab key={index} label={pages}  {...a11yProps({ index })} ></Tab>


                  ))



                }

              </Tabs>
              <Paper sx={paper} style={{ marginLeft: "5vw" }}>
                <IconButton><SearchIcon sx={{ color: '#dcdcdc' }} /></IconButton>
                <InputBase sx={inputbase} placeholder="Search for events" inputProps={{ 'aria-label': 'search event' }} />
              </Paper>
              <Login></Login>
              <SignUp></SignUp>
            </div>
          )
          }

        </Toolbar>

      </AppBar>
      <TabPanel value={value} index={0}>
        <Home></Home>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EventsV2></EventsV2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <About></About>
      </TabPanel>
    </>
  )
}
export default Header;