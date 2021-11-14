import React from "react";
import { Card as BootCard,Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    const {_id, name, price, img, description, rating} = props.bike;
    const history = useHistory();
  return (
    <BootCard>
      <BootCard.Img variant="top" src={img} />
      <BootCard.Body>
        <BootCard.Title>{name}</BootCard.Title>
        <BootCard.Text>
            {description.slice(0, 100)}...
            <h1>৳ {price}</h1>
        </BootCard.Text>
        <NavLink className="" to={`/bikes/${_id}`}>
          <Button className="button-light mb-4">View Details</Button>
        </NavLink>
      </BootCard.Body>
    </BootCard>
  );
};

export default Card;
