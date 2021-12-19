import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from '../../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
const CheckoutForm = ({payment}) => {
    const {price,name,_id} = payment;
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()

  const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);
  const handleSubmit = async (e) => {
    e.preventDefault();
      if(!stripe || !elements){
          return
      }
      const card = elements.getElement(CardElement);
      if (card == null) {
        return;
      }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

    if (error) {
        setError(error.message);
        setSuccess('');
    }
    else {
        setError('');
        console.log(paymentMethod);
    }
    //payment intent 
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    name: name,
                    email: user.email
                },
            },
        },
    ); 
  
    if (intentError) {
        setError(intentError.message);
        setSuccess('');
    }
    else {
        setError('');
        setSuccess('Your payment processed successfully.')
        console.log(paymentIntent);
        setProcessing(false);
        // save to database
        const payment = {
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction: paymentIntent.client_secret.slice('_secret')[0]
        }
        const url = `http://localhost:5000/cart/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    
  };

  return (
      <>
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    
      {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success}>
                    Pay ${price}
                </button>}
    </form>
    </>
  );
};

export default CheckoutForm;