import React from "react";
import type { AdditionalRadioLabelProps } from "./AdditionalRadioLabel.types";
import { Formatter } from "../../../utils/formatter";

export const AdditionalRadioLabel = ({
  name,
  price,
}: AdditionalRadioLabelProps) => {
  return (
    <div className="w-full">
      <div>{name}</div>
      <div className="text-sm text-red-600">+ {Formatter.brl(price)}</div>
    </div>
  );
};
