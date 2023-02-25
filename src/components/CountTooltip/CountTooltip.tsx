import React from "react";
import type { CountTooltipProps } from "./CountTooltip.types";

export const CountTooltip = ({ children, count }: CountTooltipProps) => {
  return (
    <div className="relative">
      {count > 0 ? (
        <span className="absolute right-[-5px] top-[-5px] z-10 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {count > 9 ? "9+" : count}
        </span>
      ) : null}
      {children}
    </div>
  );
};
