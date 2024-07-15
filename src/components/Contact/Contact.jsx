import React from "react";
import { RiFacebookBoxLine, RiYoutubeLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>Top Pick Villas offers luxurious vacation homes worldwide, ensuring quality and comfort.</p>
        
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
            <h3>Let's connect</h3>
            <div>
              <p>Phone</p>
              <span>+001 1234 999</span>
            </div>
            <div>
              <p>Email</p>
              <span>aashishas16@gmail.com</span>
            </div>
            <div>
              <p>Address</p>
              <span>House No.123 Sector A-1</span>
            </div>
            <ul>
              <li>
                <Link to={"https://www.facebook.com"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </li>
              <li>
                <Link to={"https://www.youtube.com"} target="_blank">
                  <RiYoutubeLine />
                </Link>
              </li>
              <li>
                <Link to={"https://www.linkedin.com"} target="_blank">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
