import React from "react";
import type { CheckBoxProps } from "./CheckBox.types";

export const CheckBox = ({ children, variant = "bordered" }: CheckBoxProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    <div
      className="flex cursor-pointer gap-5 rounded-md border-2 border-gray-200 bg-gray-100 p-2"
      onClick={handleToggle}
    >
      <input type="checkbox" checked={checked} />
      {children}
    </div>
  );
};
