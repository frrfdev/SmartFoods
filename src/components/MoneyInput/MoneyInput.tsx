import React from "react";
import { Input } from "../Input/Input";
import type { InputProps } from "../Input/Input.types";

export const MoneyInput = ({
  ...props
}: Omit<InputProps, "type" | "suffix" | "value"> & { value: string }) => {
  const [value, setValue] = React.useState<
    string | number | string[] | undefined
  >(props.value);
  return (
    <Input
      {...props}
      type="string"
      suffix="R$"
      value={value}
      onChange={(evt) => {
        const newValue = evt.currentTarget.value.replace(/\D/g, "");
        if (!newValue) {
          setValue("0,00");
          return;
        }
        const formattedValue = newValue.replace(/(\d{1,2})$/, ",$1");
        const formattedValuePaddingZero =
          formattedValue.length < 4 ? "0" + formattedValue : formattedValue;
        const formattedValueWithoutUselessPaddingZeros =
          formattedValuePaddingZero.replace(/^0+(?=\d)/, "");
        setValue(
          value === 0 ? "0,00" : formattedValueWithoutUselessPaddingZeros
        );
      }}
    ></Input>
  );
};
