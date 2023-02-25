import type * as Select from "@radix-ui/react-select";
import type React from "react";

export type SelectProps = Select.SelectProps & {
  placeholder?: string;
  options: {
    value: string;
    textValue: string | React.ReactNode;
  }[];
};
