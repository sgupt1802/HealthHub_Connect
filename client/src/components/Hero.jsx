import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Responsibility
        </h1>
        <p>
        Welcome to a revolutionary platform where prioritizing your health is as easy as a click away. Say goodbye to waiting rooms and phone queues; our user-friendly interface empowers you to effortlessly book appointments online with top-notch doctors. HealthHub Connect is not just a service; it's a commitment to your convenience and care. Experience a new era of patient empowerment, where your journey to good health begins with the simplicity of online appointment booking. Join us at HealthHub Connect, where health meets ease in the digital age.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
