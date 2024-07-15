import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Luxurious, curated villas with virtual tours and secure booking.</p>
          <p>24/7 customer support ensuring a seamless rental experience. </p>
          <p>Strategic marketing to attract high-net-worth travelers.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
