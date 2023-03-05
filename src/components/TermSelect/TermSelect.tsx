import React from "react";
import { Select } from "../Select/Select";
import type { SelectProps } from "../Select/Select.types";
import { useTerms } from "../../hooks/api/useTerms";
import { selectConverter } from "../../utils/selectConverter";
import type { TermData } from "../../@types/TermData";

export const TermSelect = ({ ...props }: Omit<SelectProps, "options">) => {
  const { data } = useTerms();

  return (
    <Select
      {...props}
      options={selectConverter<TermData>({
        data: data || ([] as TermData[]),
        value: "id",
        label: "title",
      })}
    ></Select>
  );
};
