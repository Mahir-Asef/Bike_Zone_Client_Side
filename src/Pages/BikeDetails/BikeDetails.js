import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Navigation from "./../Shared/Navigation/Navigation";
import "./BikeDetails.css";
import useCart from "./../../hooks/useCart";
import Footer from "./../Home/Footer/Footer";

const BikeDetails = () => {
  const { id } = useParams();
  const [bike, setBike] = useState([]);

  const {
    name,
    img,
    description,
    price,
    engine,
    transmission,
    tankCapacity,
    fuelType,
    weight,
    seatHeight,
    maxPower,
    color,
    rating,
  } = bike;

  const history = useHistory();

  const { addToCart } = useCart();
  const { user } = useAuth();
  const { uid } = user;

  useEffect(() => {
    fetch(`https://polar-meadow-16185.herokuapp.com/bikes/${id}`)
      .then((res) => res.json())
      .then((data) => setBike(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <Navigation></Navigation>
      <div className="bike-info container">
        <div>
          <img src={img} alt="" className="my-4" />
        </div>
        <div className="ms-3 mt-3 text-center">
          <div className="text-start">
            <h1>{name}</h1>
            <p className="details-text">{description}</p>
            <hr />
            <h2 className="fw-bold mb-4 text-danger">Price: ৳ {price}</h2>
          </div>
          <div
            className="d-flex justify-content-around p-4 text-start"
            style={{ backgroundColor: "#F2F5FB", borderRadius: "15px" }}
          >
            <div>
              <h5>Engine Capacity</h5>
              <h5>Transmission</h5>
              <h5>Max Power</h5>
              <h5>Fuel Type</h5>
              <h5>Tank Capacity</h5>
              <h5>Weight</h5>
              <h5>Seat Height</h5>
              <h5>Color</h5>
              <h5>Rating</h5>
            </div>
            <div>
              <h5>{engine}</h5>
              <h5>{transmission}</h5>
              <h5>{maxPower}</h5>
              <h5>{fuelType}</h5>
              <h5>{tankCapacity}</h5>
              <h5>{weight}</h5>
              <h5>{seatHeight}</h5>
              <h5>{color}</h5>
              <h5>
                {rating}
                <FontAwesomeIcon className="ms-2 text-warning" icon={faStar} />
              </h5>
            </div>
          </div>
          <Button
            onClick={() => {
              if (uid) {
                addToCart(bike);
              } else {
                history.push("/login");
              }
            }}
            className="text-white m-3 mx-5 btn btn-danger"
          >
            Add To Cart
          </Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BikeDetails;
