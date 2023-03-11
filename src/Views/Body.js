import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Components/About";
import Events from "../Components/Events";
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";

const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <ActionAreaCard /> */}
      {/* <VirtualizedList /> */}
    </div>
  );
};

export default Body;
