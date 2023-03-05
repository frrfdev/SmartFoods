import React, { useMemo, useEffect } from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import { FaCheck, FaTimes } from "react-icons/fa";
import type { ProductConfigCollapsibleProps } from "./ProductConfigCollapsible.types";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { FieldGroup } from "../FormGroup/FormGroup";
import { useProducts } from "../../hooks/api/useProducts";
import { selectConverter } from "../../utils/selectConverter";
import type { ProductOptionData } from "../../@types/OptionData";

const Component = ({
  id,
  handleRemoveProductConfig,
  config,
  onUpdate,
}: ProductConfigCollapsibleProps) => {
  const { data: products } = useProducts();

  const productOptions = useMemo(() => {
    return selectConverter({
      data: products ?? [],
      label: "title",
      value: "id",
      all: true,
    });
  }, [products]);

  const [selectedProductId, setSelectedProductId] = React.useState<string>("");
  const [configs, setConfigs] = React.useState<ProductOptionData[]>([]);

  const selectedProduct = useMemo(() => {
    if (selectedProductId && selectedProductId !== null)
      return productOptions.find(
        (option) => option.value === selectedProductId
      );
  }, [selectedProductId, productOptions]);

  const productOptionsNotAdded = useMemo(() => {
    return productOptions.filter((option) => {
      return !configs.find((config) => config.value === option.value);
    });
  }, [productOptions, configs]);

  const handleChangeSelectedProduct = (value: string) => {
    if (value) setSelectedProductId(value);
  };

  const handleAddProductToConfig = () => {
    if (selectedProduct)
      setConfigs([...configs, selectedProduct as ProductOptionData]);
    setSelectedProductId("");
  };

  const handleRemoveSelectedConfig = (value: string | number) => {
    setConfigs(configs.filter((config) => config.value !== value));
  };

  useEffect(() => {
    onUpdate(id, configs);
  }, [configs, id]);

  return (
    <Collapsible
      prefix={
        <span
          className="cursor-pointer"
          onClick={() => handleRemoveProductConfig(id)}
        >
          <FaTimes></FaTimes>
        </span>
      }
      title={<span>{config.title}</span>}
      content={
        <span>
          <div className="flex justify-between">
            <FieldGroup label="">
              <Select
                value={selectedProduct?.value.toString() ?? ""}
                placeholder="Selecione um produto"
                onValueChange={handleChangeSelectedProduct}
                options={productOptionsNotAdded}
              ></Select>
            </FieldGroup>
            <Button
              status="secondary-outline"
              onClick={handleAddProductToConfig}
              type="button"
            >
              <FaCheck></FaCheck>
            </Button>
          </div>

          <div className="mt-5 flex gap-2">
            {configs.map((config) => {
              return (
                <span
                  key={config.value}
                  className="flex cursor-pointer items-center gap-5 rounded-full border-2 bg-gray-200 p-2 text-gray-500 hover:text-red-600"
                  onClick={() => handleRemoveSelectedConfig(config.value)}
                >
                  <span>{config.label}</span>
                  <span>
                    <FaTimes></FaTimes>
                  </span>
                </span>
              );
            })}
          </div>
        </span>
      }
    ></Collapsible>
  );
};
export const ProductConfigCollapsible = React.memo(Component);
