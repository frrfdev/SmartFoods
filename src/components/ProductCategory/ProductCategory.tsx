import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import type { ProductCategoryProps } from "./ProductCategory.types";

export const ProductCategory = ({ onClick }: ProductCategoryProps) => {
  return (
    <div>
      <span className="mb-5">Categoria</span>
      <div className="mt-3 flex shrink-0 flex-wrap justify-center gap-7">
        <ProductCard onClick={onClick} />
        <ProductCard onClick={onClick} />
        <ProductCard onClick={onClick} />
        <ProductCard onClick={onClick} />
        <ProductCard onClick={onClick} />
        <ProductCard onClick={onClick} />
      </div>
    </div>
  );
};
