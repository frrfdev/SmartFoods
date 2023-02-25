import React from "react";

export const ColumnLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid h-full w-full grid-cols-2">{children}</div>;
};
