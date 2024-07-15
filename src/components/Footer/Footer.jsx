import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
          At Top Pick Villas, your peace of mind is our priority. We offer luxuriou
          s villas in the most sought-after destinations in the world. Our villas
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+00 000 000 00</p>
          <p>aashishas16@gmail.com</p>
          <p>© All Rights Reserved By AASHISH.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
