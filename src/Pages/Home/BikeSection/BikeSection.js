import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './BikeSection.css';
import Card from './../../Shared/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const BikeSection = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
      fetch("https://polar-meadow-16185.herokuapp.com/bikes")
        .then((res) => res.json())
        .then((data) => setBikes(data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="container section-container text-center">
      <h1 className="fw-bold mb-5 text-center">Best Selling Bikes</h1>
      <div className="all-bike">
        {bikes.slice(0, 6).map((bike) => (
          <Card bike={bike} key={bike._id}></Card>
        ))}
      </div>
      <NavLink to="/allbikes">
        <Button className="btn btn-primary my-3 px-5">See All</Button>
      </NavLink>
    </div>
  );
};

export default BikeSection;