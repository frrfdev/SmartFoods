import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";

import { columns } from "./CategoryList.columns";
import { useQuery } from "@tanstack/react-query";
import { Table } from "../Table/Table";

export const CategoryList = () => {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return {
        data: [
          {
            title: "Categoria 1",
            description: "Categoria",
          },
          {
            title: "Categoria 2",
            description: "Categoria",
          },
          {
            title: "Categoria 3",
            description: "Categoria",
          },
          {
            title: "Categoria 4",
            description: "Categoria",
          },
        ],
      };
    },
  });

  const table = useReactTable({
    data: categoriesQuery.data?.data ?? [],
    columns: columns as never,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full border-2 border-gray-200 bg-gray-100 px-10 pt-20">
      <h1 className="text-3xl">Minhas Categorias</h1>

      <Table
        table={table}
        classes={{
          tr: "even:bg-gray-100 odd:bg-white",
          th: "last:text-right first:text-left first:pl-2 py-2 last:pr-2",
          thead: "border-b-2 border-gray-400",
          td: "last:text-right first:pl-2 py-2 last:pr-2",
          table: "",
        }}
      ></Table>
    </div>
  );
};
