import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Our mission is to empower individuals to take control of their health by offering a seamless and convenient way to connect with healthcare professionals. We are driven by the belief that everyone deserves access to high-quality healthcare, and our platform is designed to make that a reality.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
