export interface FlavorOptionProps {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  onClick: (id: string, quantity: number) => void;
}
