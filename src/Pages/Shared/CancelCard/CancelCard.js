import React from "react";
import { Card as BootCard, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useCart from './../../../hooks/useCart';

const CancelCard = (props) => {
    const {_id, name, price, img, description, rating,email} = props.bike;
    const {cancelFromCart,cancelFromBikes} = useCart();
  return (
    <BootCard >
      <BootCard.Img variant="top" src={img} />
      <BootCard.Body>
        <BootCard.Title>{name}</BootCard.Title>
        <BootCard.Text>
            {description.slice(0, 100)}...
            <h1>{price}</h1>
        </BootCard.Text>
        {email ? <Button
          onClick={() => {cancelFromCart(_id)}}
          className="button-light my-3"
        >
          Cancel
        </Button> : 
        <Button
        onClick={() => {cancelFromBikes(_id)}}
        className="button-light my-3"
      >
        Delete
      </Button>}

      </BootCard.Body>
    </BootCard>
  );
};


export default CancelCard;