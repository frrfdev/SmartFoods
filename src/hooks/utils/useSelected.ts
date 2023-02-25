import { useState } from "react";

export const useSelected = (initial?: string) => {
  const [selected, setSelected] = useState<undefined | string>(initial);

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  const isSelected = (id: string) => {
    return selected === id;
  };

  return { selected, handleSelect, isSelected };
};
