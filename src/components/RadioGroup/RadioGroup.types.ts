import type { RadioOptionData } from "../../@types/RadioOptionData";

export interface RadioGroupProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: RadioOptionData[];
  optionsClassName?: string;
}
