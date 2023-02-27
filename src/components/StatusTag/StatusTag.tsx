import React from "react";

export type StatusTagStatuses = "success" | "error" | "warning";

interface StatusTagProps {
  children: React.ReactNode;
  status: StatusTagStatuses;
}

const getColor = (status: StatusTagStatuses) => {
  switch (status) {
    case "success":
      return "bg-green-100 text-green-500";
    case "error":
      return "bg-red-100 text-red-500";
    case "warning":
      return "bg-yellow-100 text-yellow-500";
  }
};

export const StatusTag = ({ children, status }: StatusTagProps) => {
  const color = getColor(status);

  return (
    <span
      className={`rounded-md py-4 px-8 text-sm font-bold uppercase ${color} block text-center`}
    >
      {children}
    </span>
  );
};
