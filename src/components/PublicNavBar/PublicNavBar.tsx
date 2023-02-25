import React from "react";
import { ProductsSearchBar } from "./ProductsSearchBar";
import { CartDropDown } from "./CartDropdown/CartDropDown";

export const PublicNavBar = () => {
  return (
    <div className="items-between fixed flex h-auto w-full flex-row items-center justify-between overflow-hidden  p-5 text-white ">
      <div className="flex gap-4">
        <span className="items-left flex flex-col gap-2 text-gray-700 lg:flex-row lg:items-center">
          <div className="h-10 w-10 rounded-full bg-red-600" />
          <span className="hidden lg:block">Pizzaria JS</span>
        </span>

        <ProductsSearchBar />
      </div>
      <CartDropDown />
    </div>
  );
};
