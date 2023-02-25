import React from "react";
import { Collapsible } from "../Collapsible/Collapsible";
import { FaCheck, FaTimes } from "react-icons/fa";
import type { ProductConfigCollapsibleProps } from "./ProductConfigCollapsible.types";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { FieldGroup } from "../FormGroup/FormGroup";

const options = [
  { textValue: "Borda de chocolate", value: "1" },
  { textValue: "Borda de Mussarela", value: "2" },
  { textValue: "Borda de Catupiry", value: "3" },
];

export const ProductConfigCollapsible = ({
  id,
  handleRemoveProductConfig,
}: ProductConfigCollapsibleProps) => {
  const [currentConfig, setCurrentConfig] = React.useState<any>(null);
  const [selectedConfigs, setSelectedConfigs] = React.useState<any>([]);

  const handleChangeCurrentConfig = (value: string) => {
    if (value && value !== null)
      setCurrentConfig(options.find((option) => option.value === value));
  };

  const handleAddCurrentConfig = () => {
    if (currentConfig) setSelectedConfigs([...selectedConfigs, currentConfig]);
    setCurrentConfig(null);
  };

  const handleRemoveSelectedConfig = (value: string) => {
    setSelectedConfigs(
      selectedConfigs.filter((config: any) => config.value !== value)
    );
  };

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
      title={<span>Borda recheada</span>}
      content={
        <span>
          <div className="flex justify-between">
            <FieldGroup label="" name="">
              <Select
                value={currentConfig?.value ?? ""}
                placeholder="Selecione uma borda"
                onValueChange={handleChangeCurrentConfig}
                options={options}
              ></Select>
            </FieldGroup>
            <Button status="secondary-outline" onClick={handleAddCurrentConfig}>
              <FaCheck></FaCheck>
            </Button>
          </div>

          <div className="mt-5 flex gap-2">
            {selectedConfigs.map((config: any) => {
              return (
                <span
                  key={config.value}
                  className="flex cursor-pointer items-center gap-5 rounded-full border-2 bg-gray-200 p-2 text-gray-500 hover:text-red-600"
                  onClick={() => handleRemoveSelectedConfig(config.value)}
                >
                  <span>{config.textValue}</span>
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
