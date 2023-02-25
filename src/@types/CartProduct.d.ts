import type { ProductData } from "./ProductData";

export type CartProduct = ProductData & {
  quantity: number;
};
