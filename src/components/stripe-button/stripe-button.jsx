import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51M0UKpSCI8E3fcMzHrz8bNeCDtCqhNAA7ohYJkj3PSSLOQg1iim7ij9CJtJiaMi76nQtbqrf1eeAjymq4cYXNoZC00t4aLG9TX";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopzzy"
      image="https://cutt.ly/vNXTMG4"
      billingAddress
      shippingAddress
      description={`Total Amount : ₹ ${price}`}
      amount={price}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
