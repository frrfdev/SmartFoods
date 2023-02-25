export interface ProductData {
  title: string;
  description: string;
  price: number;
  promotionalPrice: number;
  category_id: string;
  category?: any;
  subcategory_id: string;
  subcategory?: any;
  type_id: string;
  type?: any;
  options?: any[];
  images?: File[];
  id: string;
}
