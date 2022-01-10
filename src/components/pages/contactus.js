import React from "react";
import "../../App.css";
import "../contactus.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="maincontainer">
      <div className="heading">
        <h1>CONTACT US</h1>
      </div>
      <div className="container1">
        <div className="text">
          <p>Harju Makond, Talinn</p>
          <p>Kesklinna, Linnaosa</p>
          <p>Narva mn 5, 10117</p>
          <p>Estonia</p>
        </div>
      </div>
      <div className="container2">
        <div className="text2">
          <h2>General Inquires</h2>
          <p>info@helmda-systems.com</p>
          <p>+3726027216</p>
        </div>
      </div>
      <div className="container3">
        <div className="text3">
          <h2>For Investors</h2>
          <p>david.h@helmda-systems.com</p>
        </div>
      </div>
      <div className="container4">
        <div className="box">
          <h2>Contact Us</h2>
          <p>Careers</p>
          <h1>About Us</h1>
          <h3>Mission</h3>
          <h4>Our Team</h4>
        </div>
      </div>
      <div className="container5">
        <div className="sicons">
          <FaFacebookF size={30} /> &nbsp; &nbsp;
          <FaLinkedinIn size={30} /> &nbsp; &nbsp;
          <FaTwitter size={30} /> &nbsp; &nbsp;
          <FaEnvelope size={30} />
        </div>
      </div>
      <div className="item1">
        <img src="./town.png" class="responsive" alt="town" />
      </div>
    </div>
  );
}
