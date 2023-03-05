import React from "react";
import { Select } from "../Select/Select";
import type { SelectProps } from "../Select/Select.types";
import { useCategories } from "../../hooks/api/useCategories";
import { selectConverter } from "../../utils/selectConverter";
import type { CategoryData } from "../../@types/CategoryData";

export const CategorySelect = ({ ...props }: Omit<SelectProps, "options">) => {
  const { data } = useCategories();

  return (
    <Select
      {...props}
      options={selectConverter<CategoryData>({
        data: data || ([] as CategoryData[]),
        label: "title",
        value: "id",
      })}
    ></Select>
  );
};
