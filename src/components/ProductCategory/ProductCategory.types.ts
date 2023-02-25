import type { ProductData } from "../../@types/ProductData";

export interface ProductCategoryProps {
  onClick?: (product: ProductData) => void;
}
