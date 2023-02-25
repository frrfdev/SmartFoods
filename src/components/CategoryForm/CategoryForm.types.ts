export interface CategoryFormProps {
  categoryId: string;
  title: string;
  description: string;
  image: File[];
}

export interface CategoryFormErrors {
  categoryId?: string;
  title?: string;
  description?: string;
}
