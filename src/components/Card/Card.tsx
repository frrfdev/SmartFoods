import React from "react";
import type { CardProps } from "./Card.types";

export const Card = ({
  label,
  icon: Icon,
  value,
  iconSize = 32,
}: CardProps) => {
  return (
    <div className="flex min-w-fit grow items-center justify-between gap-4 rounded-md border-2 border-gray-100 p-7 text-gray-500">
      <div className="flex flex-col">
        <span>{label}</span>
        <strong className="text-2xl text-gray-900">{value}</strong>
      </div>
      {Icon ? <Icon size={iconSize}></Icon> : null}
    </div>
  );
};
