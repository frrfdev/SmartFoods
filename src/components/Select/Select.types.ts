import type * as Select from "@radix-ui/react-select";
import type { OptionData } from "../../@types/OptionData";

export type SelectProps = Omit<Select.SelectProps, "onValueChange"> & {
  placeholder?: string;
  onValueChange?: (value: string, option: OptionData) => void;
  options: OptionData[];
};
