import React from "react";
import "../../App.css";
import "../Menu.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="maincontainer">
      <div className="products">
        <Link to="/contactus">
          <img src="./products.png" class="responsive" alt="town" />
        </Link>
      </div>
      <div className="aboutus">
        <Link to="/contactus">
          <img src="./aboutus.png" class="responsive" alt="town" />
        </Link>
      </div>
      <div className="news">
        <Link to="/contactus">
          <img src="./news.png" class="responsive" alt="town" />
        </Link>
      </div>
      <div className="contactus">
        <Link to="/contactus">
          <img src="./contactus.png" class="responsive" alt="town" />
        </Link>
      </div>
      <div className="container5">
        <div className="sicons">
          <FaFacebookF size={30} /> &nbsp; &nbsp;
          <FaLinkedinIn size={30} /> &nbsp; &nbsp;
          <FaTwitter size={30} /> &nbsp; &nbsp;
          <FaEnvelope size={30} />
        </div>
      </div>
    </div>
  );
}
