import React from "react";
import { CategoriesDropdown } from "./CategoriesDropdown/CategoriesDropdown";
import { Input } from "../Input/Input";
import { FaSearch } from "react-icons/fa";

export const ProductsSearchBar = () => {
  return (
    <div className="border-gray-2 flex w-[35rem] items-center gap-2 rounded-lg border-2 bg-gray-100 p-2 text-gray-800">
      <CategoriesDropdown />
      <span className="w-full border-l-2 border-gray-200 pl-5">
        <Input
          variant="clean"
          placeholder="Digite o nome do produto ou categoria"
        />
      </span>
      <FaSearch size={24} />
    </div>
  );
};
