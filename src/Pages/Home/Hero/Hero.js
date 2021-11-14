import React from "react";
import { Button } from "react-bootstrap";
// import video from "../../../video/hero-bg.mp4";
import "./Hero.css";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        {/* <video className="background" autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
        </video> */}
        <div className="overlay"></div>
      </div>
      <div className="hero-title">
        <h1 className="caption mb-sm-3 fw-bold">Take Your Bike And Explore Your Desire Destination</h1>
        <p className="details mb-sm-5">Be A Safe Rider.Keep Calm And Focused."Be Safe And Make Other Safe." </p>
        <NavLink to="allbikes">
        <Button className="button">View Bikes</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;