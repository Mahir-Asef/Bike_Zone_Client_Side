import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Feedback = (props) => {
    const {displayName, description, rating} = props.review;
  return (
    <Card style={{ width: "auto", boxShadow: "0 0 10px lightGray",backgroundColor:"lightGray"  }}>
      <Card.Body>
        <Card.Title>Name: {displayName}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
       Rating: {rating}<i style={{color:"goldenRod"}} class="fas fa-star"></i>
      </Card.Body>
    </Card>
  );
};

export default Feedback;
