import type { OptionData } from "../@types/OptionData";

interface Props<T> {
  data: T[];
  label: keyof T;
  value: keyof T;
  all?: boolean;
}

export const selectConverter = <T>({
  data,
  label,
  value,
  all,
}: Props<T>): OptionData[] | (OptionData & T)[] => {
  return data.map((item) => {
    const selectLabel = item[label as keyof T];
    const selectValue = item[value as keyof T];
    if (typeof selectLabel === "string" && typeof selectValue === "string")
      return {
        ...(all ? item : {}),
        label: selectLabel,
        value: selectValue,
        key: selectValue,
      };

    throw new Error("LABEL and VALUE must be string");
  });
};
