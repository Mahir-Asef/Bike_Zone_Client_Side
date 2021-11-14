import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CancelCard from './../../Shared/CancelCard/CancelCard';

const ManageAllBikes = () => {
    const [bikes, setBikes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setBikes(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(bikes);

    return (
        <div>
        <h1 className="dash-title">Manage all   bikes </h1>
        <div className="all-bike">
          {bikes.map((bike) => (
            <CancelCard bike={bike} key={bike._id}></CancelCard>
          ))}
        </div>
      </div>
    );
};

export default ManageAllBikes;