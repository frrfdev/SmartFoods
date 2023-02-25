import React from "react";
import type { RadioGroupProps } from "./RadioGroup.types";
import { Radio } from "../Radio/Radio";

export const RadioGroup = ({
  onChange,
  options,
  optionsClassName,
}: RadioGroupProps) => {
  return (
    <fieldset>
      {options.map(({ value, label, key, name, disabled }) => {
        return (
          <Radio
            value={value}
            name={name}
            key={key}
            content={label}
            onChange={onChange}
            disabled={disabled}
            className={optionsClassName}
          />
        );
      })}
    </fieldset>
  );
};
