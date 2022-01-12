import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  "pk_test_51K8LjrBqUhT6qI11efTHPtZI8RNtLbVbE8bnLs5LkvUiVoTVBGBslZiulFASO1p1es1hQvFjK1ko6Q0DpekF8K4d00GsTPrLvc"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState({});
  useEffect(() => {
    fetch(`https://polar-meadow-16185.herokuapp.com/bikes/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [paymentId]);
  return (
    <div className="payment">
      <h1>Payment for :{payment.name} </h1>
      <h4>Price: ${payment.price} </h4>
      
      {payment.price && <Elements  stripe={stripePromise}>
          <CheckoutForm 
          payment={payment} />
      </Elements>}
      <img src={payment.img} width="50%"  style={{marginTop:"10px"}} alt='' />
    </div>
  );
};

export default Payment;
