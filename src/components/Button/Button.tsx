import React from "react";
import type { ButtonProps } from "./Button.types";

export const Button = ({
  status = "primary",
  children,
  isActive = false,
  size = "md",
  round = false,
  stretch = false,
  ...rest
}: ButtonProps) => {
  const primary = "bg-red-600 text-white";

  const statusClass = () => {
    switch (status) {
      case "secondary":
        return "bg-gray-200 border-transparent text-gray-400";
      case "confirm":
        return "bg-green-600 border-transparent text-white";
      case "secondary-outline":
        return "bg-transparent border-gray-200 text-gray-700";
      case "text":
        return "bg-transparent border-transparent text-gray-600";
      default:
        return primary;
    }
  };
  const currentClass = isActive ? primary : statusClass();

  const sizeStyle = () => {
    switch (size) {
      case "xs":
        return `text-xs px-2 py-1 ${round ? "h-6 w-6" : ""}`;
      case "sm":
        return `text-sm p-2 ${round ? "h-8 w-8" : ""}`;
      case "md":
        return `text-base px-6 py-3 ${round ? "h-14 w-14" : ""}`;
      case "lg":
        return `text-lg px-8 py-4 ${round ? "h-20 w-20" : ""}`;
      default:
        return `text-base px-6 py-3 ${round ? "h-14 w-14" : ""}`;
    }
  };

  return (
    <button
      onClick={(e) => {
        e.currentTarget.blur();
        if (rest.onClick) rest.onClick(e);
      }}
      className={`flex select-none items-center justify-center gap-4 ${
        round ? "rounded-full" : "rounded-md"
      } ${
        stretch ? "w-full" : ""
      } border-2 border-transparent transition duration-300 ease-in-out focus:border-red-600 hover:enabled:border-red-600 hover:enabled:bg-white hover:enabled:text-red-600 focus:enabled:bg-white focus:enabled:text-red-600 disabled:cursor-not-allowed disabled:bg-gray-400 motion-reduce:transition-none motion-reduce:hover:transform-none ${sizeStyle()} ${currentClass}`}
      {...rest}
    >
      {children}
    </button>
  );
};
