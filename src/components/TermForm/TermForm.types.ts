export interface CategoryFormProps {
  termId: string;
  title: string;
  description: string;
  image: any;
}

export interface CategoryFormErrors {
  termId?: string;
  title?: string;
  description?: string;
}
