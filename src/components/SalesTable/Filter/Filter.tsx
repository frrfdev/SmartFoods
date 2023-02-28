import React, { useEffect } from "react";
import { Button } from "../../Button/Button";
import { useSelected } from "../../../hooks/utils/useSelected";
import type { OrdersFilterData } from "../../../@types/OrdersFilterData";

type FilterProps = {
  setFilter: (filter: OrdersFilterData) => void;
  filter: OrdersFilterData;
};

export const Filter = ({ setFilter, filter }: FilterProps) => {
  const { handleSelect, isSelected, selected } = useSelected("");

  const handleAllClick = () => handleSelect("");

  const handleFinishedClick = () => handleSelect("1");

  const handlePendingClick = () => handleSelect("3");

  const handleCanceledClick = () => handleSelect("2");

  useEffect(() => {
    setFilter({ ...filter, statusId: selected || "" });
  }, [selected, setFilter, filter]);

  return (
    <div className="flex gap-1 lg:gap-2">
      <Button
        size="sm"
        isActive={isSelected("")}
        status="secondary-outline"
        onClick={handleAllClick}
      >
        TODOS
      </Button>
      <Button
        size="sm"
        isActive={isSelected("1")}
        status="secondary-outline"
        onClick={handleFinishedClick}
      >
        Finalizado
      </Button>
      <Button
        size="sm"
        isActive={isSelected("3")}
        status="secondary-outline"
        onClick={handlePendingClick}
      >
        Pendente
      </Button>
      <Button
        size="sm"
        isActive={isSelected("2")}
        status="secondary-outline"
        onClick={handleCanceledClick}
      >
        Cancelado
      </Button>
    </div>
  );
};
