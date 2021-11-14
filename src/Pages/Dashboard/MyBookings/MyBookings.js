import React from 'react';
import useCart from './../../../hooks/useCart';
import CancelCard from './../../Shared/CancelCard/CancelCard';

const MyBookings = () =>{
    const {bookedBike} = useCart();
    return (
      <div>
        <h1>My Bookings</h1>
        <div className="all-bike">
          {bookedBike.map((bike) => (
            <CancelCard bike={bike} key={bike._id}></CancelCard>
          ))}
        </div>
      </div>
    );
  };
  

export default MyBookings;