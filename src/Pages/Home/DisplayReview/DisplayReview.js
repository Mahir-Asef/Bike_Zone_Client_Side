import React from 'react';
import Feedback from './../Feedback/Feedback';
import { useState } from 'react';
import { useEffect } from 'react';

const DisplayReview = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(() => {
        fetch("https://polar-meadow-16185.herokuapp.com/review")
          .then((res) => res.json())
          .then((data) =>{
            setReviews(data)
            })
          .catch((err) => console.log(err))
      }, [])
    return (
        <div className="container">
      <h1 className="fw-bold mb-5 text-center">User Review</h1>
      <div className="all-bike">
        {reviews.map((review) => (
         <Feedback review={review} key={review._id}></Feedback>
        ))}
      </div>
        </div>
    );
};

export default DisplayReview;