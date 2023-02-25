import React from "react";
import { Cart as CartComponent } from "../../components/Cart/Cart";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";

export const CartPage = () => {
  return (
    <PrivatePage>
      <div className="lg: p-5 px-40">
        <CartComponent variant="full" />
      </div>
    </PrivatePage>
  );
};

export default CartPage;
