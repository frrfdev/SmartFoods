import type { ProductConfigData } from "../components/ProductForm/ProductForm";

export interface ProductData {
  title: string;
  description: string;
  price: number;
  promotionalPrice?: number;
  categoryId: string;
  category?: any;
  subCategoryId: string;
  subCategory?: any;
  typeId: string;
  type?: any;
  options?: any[];
  images?: File[];
  id: string;
  configs?: ProductConfigData[];
}
