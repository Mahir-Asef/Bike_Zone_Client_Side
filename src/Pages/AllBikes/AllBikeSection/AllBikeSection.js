import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import './BikeSection.css';
import Card from './../../Shared/Card/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const AllBikeSection = () => {

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
      fetch("https://polar-meadow-16185.herokuapp.com/bikes")
        .then((res) => res.json())
        .then((data) => setBikes(data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <div className="container section-container text-center">
      <h1 className="fw-bold mb-5 text-start">All Bikes</h1>
      <div className="all-bike">
        {bikes.map((bike) => (
          <Card bike={bike} key={bike._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllBikeSection;