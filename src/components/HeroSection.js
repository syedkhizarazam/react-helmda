import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>01</h1>
      <p>Galeax-A</p>
      <div className="container">
        <img src="./GaleaX-A2.png" class="responsive" alt="logo" />
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Discover
        </Button>
        <div className="rectangle">
          <Button
            buttonStyle="btn--primary"
            style={{ flexDirection: "row" }}
            buttonSize="btn--small"
          ></Button>
          <Button
            buttonStyle="btn--outline"
            style={{ flexDirection: "row" }}
            buttonSize="btn--small"
          ></Button>

          <div className="sicons">
            <FaFacebookF size={30} /> &nbsp; &nbsp;
            <FaLinkedinIn size={30} /> &nbsp; &nbsp;
            <FaTwitter size={30} /> &nbsp; &nbsp;
            <FaEnvelope size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
