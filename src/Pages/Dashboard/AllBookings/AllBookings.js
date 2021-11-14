import React from 'react';
import CancelCard from './../../Shared/CancelCard/CancelCard';
import { useState } from 'react';
import { useEffect } from 'react';

const AllBookings = () => {
    const [bike,setBike] = useState([]);
    useEffect(() => {
        fetch("https://polar-meadow-16185.herokuapp.com/cart")
          .then((res) => res.json())
          .then((data) =>{
               setBike(data)
            })
          .catch((err) => console.log(err))
      }, [bike])
    return (
      <div>
        <h1 className="dash-title text-center">ALL Bookings </h1>
        <div className="all-bike">
          {bike.map((bike) => (
            <CancelCard bike={bike} key={bike._id}></CancelCard>
          ))}
        </div>
      </div>
    );
  };
  

export default AllBookings;