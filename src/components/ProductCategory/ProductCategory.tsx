import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import type { ProductCategoryProps } from "./ProductCategory.types";
import { useProducts } from "../../hooks/api/useProducts";

export const ProductCategory = ({ onClick }: ProductCategoryProps) => {
  const { data: products } = useProducts();

  return (
    <div>
      <span className="mb-5">Categoria</span>
      <div className="mt-3 flex shrink-0 flex-wrap justify-center gap-7">
        {products?.map((product) => (
          <ProductCard key={product.id} onClick={onClick} product={product} />
        ))}
      </div>
    </div>
  );
};
