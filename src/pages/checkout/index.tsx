import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";

export const Checkout = () => {
  return (
    <PrivatePage>
      <div className="w-full p-5 lg:px-60 lg:pt-10">
        <CheckoutForm />
      </div>
    </PrivatePage>
  );
};

export default Checkout;
