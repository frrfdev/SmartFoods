import React from "react";
import type { TitleProps } from "./Title.types";

export const Title = ({ children, size = "4" }: TitleProps) => {
  const sizes = {
    "1": "4xl",
    "2": "3xl",
    "3": "2xl",
    "4": "xl",
    "5": "lg",
    "6": "md",
    "7": "sm",
    "8": "xs",
    "9": "xxs",
  };

  return (
    <div className={`text-red-600 text-${sizes[size]} font-bold`}>
      {children}
    </div>
  );
};
