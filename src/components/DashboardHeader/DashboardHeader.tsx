import React from "react";
import { useAuthContext } from "../../context/AuthContext";

export const DashboardHeader = () => {
  const { user } = useAuthContext();

  return (
    <div className="flex flex-col">
      <span className="font-bold text-gray-900">Bem vindo, {user?.name}</span>
      <span className="text-sm text-gray-400">
        {new Intl.DateTimeFormat("pt-br", {
          dateStyle: "medium",
        }).format(new Date())}
      </span>
    </div>
  );
};
