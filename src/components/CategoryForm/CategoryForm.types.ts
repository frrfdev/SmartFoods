export interface CategoryFormProps {
  categoryId: string;
  title: string;
  description: string;
  id?: string;
}

export interface CategoryFormErrors {
  categoryId?: string;
  title?: string;
  description?: string;
}
