import React from "react";
import { Button } from "../Button/Button";
import type { ProductsFilterProps } from "./ProductsFilter.types";

export const ProductsFilter = ({
  handleSelect,
  isSelected,
}: ProductsFilterProps) => {
  const buttons = [
    {
      label: "Todos",
      value: "all",
      onClick: () => handleSelect("all"),
      isSelected: isSelected("all"),
    },
    {
      label: "Pizza",
      value: "pizza",
      onClick: () => handleSelect("pizza"),
      isSelected: isSelected("pizza"),
    },
    {
      label: "Hamburger",
      value: "hamburger",
      onClick: () => handleSelect("hamburger"),
      isSelected: isSelected("hamburger"),
    },
    {
      label: "Hotdog",
      value: "hotdog",
      onClick: () => handleSelect("hotdog"),
      isSelected: isSelected("hotdog"),
    },
    {
      label: "Sorvetes",
      value: "icecreams",
      onClick: () => handleSelect("icecreams"),
      isSelected: isSelected("icecreams"),
    },
    {
      label: "Bebidas",
      value: "drinks",
      onClick: () => handleSelect("drinks"),
      isSelected: isSelected("drinks"),
    },
    {
      label: "Ofertas",
      value: "offers",
      onClick: () => handleSelect("offers"),
      isSelected: isSelected("offers"),
    },
  ];

  return (
    <div className="flex gap-4 overflow-x-auto">
      {buttons.map(({ label, value, onClick, isSelected }) => (
        <Button
          key={value}
          status="text"
          isActive={isSelected}
          onClick={onClick}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
