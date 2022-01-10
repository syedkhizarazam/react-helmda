import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/contactus";
import Menu from "./components/pages/Menu";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contactus" exact element={<ContactUs />} />
          <Route path="/menu" exact element={<Menu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
