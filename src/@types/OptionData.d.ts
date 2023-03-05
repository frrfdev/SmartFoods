import type { ProductData } from "./ProductData";

export interface OptionData {
  value: string | number;
  label: React.ReactNode;
  key: string | number;
  disabled?: boolean;
  [other: string]: unknown;
}

export type ProductOptionData = OptionData & ProductData;
