import React from "react";
import { Button } from "../../Button/Button";
import { useSelected } from "../../../hooks/utils/useSelected";

export const Filter = () => {
  const { handleSelect, selected, isSelected } = useSelected("all");

  const handleAllClick = () => {
    //all function
    handleSelect("all");
  };

  const handleFinishedClick = () => {
    //all function
    handleSelect("finished");
  };

  const handlePendingClick = () => {
    //all function
    handleSelect("pending");
  };

  const handleCanceledClick = () => {
    //all function
    handleSelect("canceled");
  };

  return (
    <div className="flex gap-1 lg:gap-2">
      <Button
        size="sm"
        isActive={isSelected("all")}
        status="secondary-outline"
        onClick={handleAllClick}
      >
        TODOS
      </Button>
      <Button
        size="sm"
        isActive={isSelected("finished")}
        status="secondary-outline"
        onClick={handleFinishedClick}
      >
        Finalizado
      </Button>
      <Button
        size="sm"
        isActive={isSelected("pending")}
        status="secondary-outline"
        onClick={handlePendingClick}
      >
        Pendente
      </Button>
      <Button
        size="sm"
        isActive={isSelected("canceled")}
        status="secondary-outline"
        onClick={handleCanceledClick}
      >
        Cancelado
      </Button>
    </div>
  );
};
