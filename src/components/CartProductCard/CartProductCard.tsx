import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import type { CartProductCardProps } from "./CartProductCard.types";

export const CartProductCard = ({ quantity }: CartProductCardProps) => {
  return (
    <div
      className="flex w-full items-center
		justify-between"
    >
      <ProductCard variant="cart"></ProductCard>
      <span className="rounded-md bg-gray-200 p-2">Quantidade: {quantity}</span>
    </div>
  );
};
