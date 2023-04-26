import React from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Box,
} from "@mui/material";
import { useState } from "react";
import DrawerComp from "../Components/DrawerComp";
import PropTypes from "prop-types";
import About from "../Components/About";
import Home from "../Components/Home";
import EventsV2 from "../Components/EventsV2";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Searchbar from "../Components/Searchbar";
import Cookies from "js-cookie";
import Dashboard from "../Pages/Dashboard";
import Profile from '../Components/Profile'

const appbar = {
  backgroundColor: "#38342b",
};

const Pages = ["Home", "Events", "About US"];
const PagesLog = ['Profile', 'Events', 'About US']
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = (props) => {
  const [Admin, setAdmin] = useState("no");
  const setAdmin1 = (event) => {
    setAdmin(event);
  };
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(Cookies.get("jwtoken"));
  if (Cookies.get("jwtoken") === undefined) {
    // console.log("Inisfasfsa")
    return (
      <>
        <AppBar sx={appbar}>
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComp></DrawerComp>
                <Typography>K-Event</Typography>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6">K-VENT MANAGER</Typography>
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                >
                  {Pages.map((pages, index) => (
                    <Tab
                      key={index}
                      label={pages}
                      {...a11yProps({ index })}
                    ></Tab>
                  ))}
                </Tabs>

                {/* SEARCH BAR IMPLEMENTATION */}
                <Searchbar />

                <Login set={setAdmin1}></Login>
                <SignUp></SignUp>
              </div>
            )}
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
    );
  } else {
    return (
      <>
        <AppBar sx={appbar}>
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComp></DrawerComp>
                <Typography>K-Event</Typography>
              </>
            ) : (
              <div style={{ display: "flex", justifyContent: "left" }}>
                <Typography>K-VENT MANAGER</Typography>
                <Tabs
                  style={{ marginLeft: "5vw" }}
                  textColor="inherit"
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                >
                  {PagesLog.map((pages, index) => (
                    <Tab
                      key={index}
                      label={pages}
                      {...a11yProps({ index })}
                    ></Tab>
                  ))}
                </Tabs>

                {/* SEARCH BAR IMPLEMENTATION */}
                <Searchbar />
                <Dashboard jwt={props.jwt}></Dashboard>
                    
            </div>
            )}
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={0}>
     <Profile></Profile>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EventsV2></EventsV2>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <About></About>
        </TabPanel>
      </>
    );
  }
};
export default Header;
