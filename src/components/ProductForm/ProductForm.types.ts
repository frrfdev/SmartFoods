export interface ProductFormProps {
  title: string;
  description: string;
  price: number;
  promotionalPrice?: number;
  categoryId: string;
  subCategoryId: string;
  typeId: string;
  options: string[];
  images: any[];
}

export interface ProductFormErrors {
  title?: string;
  description?: string;
  price?: string;
  promotionalPrice?: string;
  categoryId?: string;
  subCategoryId?: string;
  typeId?: string;
  options?: string;
  images?: string;
}

export default ProductFormProps;
