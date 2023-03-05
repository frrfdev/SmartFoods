import type { ProductOptionData } from "../../@types/OptionData";
import type { ProductConfigData } from "../ProductForm/ProductForm";

export interface ProductConfigCollapsibleProps {
  id: string;
  handleRemoveProductConfig: (id: string) => void;
  config: ProductConfigData;
  onUpdate: (id: string, configs: ProductOptionData[]) => void;
}
