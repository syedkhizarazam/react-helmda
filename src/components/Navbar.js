import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <useNavigate onClick={() => navigate("/")} className="navbar-logo">
            <img src="./logo.png" alt="logo" />
          </useNavigate>
          <div className="menu-icon">
            <useNavigate
              class="fas fa-bars"
              onClick={() => navigate("/menu")}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
