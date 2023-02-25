export interface CategoryData {
  title: string;
  description: string;
  categoryId: string;
  category: {
    name: string;
    id: string;
  };
  image: File[];
}
