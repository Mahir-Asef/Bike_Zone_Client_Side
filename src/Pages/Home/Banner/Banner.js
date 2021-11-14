import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner1.png";
import banner2 from "../../../images/banner2.png";
import banner3 from "../../../images/banner3.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="banner">
      <Carousel className="">
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="banner-text text-white">
              Ohh !! it's a off day.Let's go for a wild ride.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="banner-text">
              <span className="text">Futuristic bike is coming soon. </span>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="banner-text">
              <span className="text-warning bg-dark">who don't love vintage bike. Right?!</span>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
