import type { ProductConfigData } from "./ProductForm";

export interface ProductFormProps {
  title: string;
  description: string;
  price: number;
  promotionalPrice?: number;
  categoryId: string;
  subCategoryId: string;
  typeId: string;
  termId: string;
  options: string[];
  images: File[];
  id?: string;
  configs?: ProductConfigData[];
}

export interface ProductFormErrors {
  title?: string;
  description?: string;
  price?: string;
  promotionalPrice?: string;
  categoryId?: string;
  subCategoryId?: string;
  typeId?: string;
  termId?: string;
  options?: string;
  images?: string;
  configs?: ProductConfigData[];
}

export default ProductFormProps;
