import React from "react";
import { Select } from "../Select/Select";
import type { SelectProps } from "../Select/Select.types";

export const ProductTypeSelect = ({
  ...props
}: Omit<SelectProps, "options">) => {
  const options = [
    { value: "1", label: "Simples", key: "1" },
    { value: "2", label: "Configurável", key: "1" },
  ];

  return <Select {...props} options={options}></Select>;
};
