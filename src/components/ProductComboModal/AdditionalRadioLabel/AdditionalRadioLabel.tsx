import React from "react";
import type { AdditionalRadioLabelProps } from "./AdditionalRadioLabel.types";

export const AdditionalRadioLabel = ({
  name,
  price,
}: AdditionalRadioLabelProps) => {
  return (
    <div className="w-full">
      <div>{name}</div>
      <div className="text-sm text-red-600">+ R${price}</div>
    </div>
  );
};
