export interface ProductsFilterProps {
  isSelected: (id: string) => boolean;
  handleSelect: (id: string) => void;
}
