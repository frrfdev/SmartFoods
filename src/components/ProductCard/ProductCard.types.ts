import type { ProductData } from "../../@types/ProductData";

export interface ProductCardProps {
  variant?: "default" | "cart" | "preview";
  onClick?: (product: ProductData) => void;
  showDetails?: (product: ProductData) => void;
}
