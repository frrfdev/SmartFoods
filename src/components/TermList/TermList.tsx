import React from "react";
import { Table } from "../Table/Table";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

import { columns } from "./TermList.columns";

export const TermList = () => {
  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return {
        data: [
          {
            title: "Termo 1",
            description: "Termo",
          },
          {
            title: "Termo 2",
            description: "Termo",
          },
          {
            title: "Termo 3",
            description: "Termo",
          },
          {
            title: "Termo 4",
            description: "Termo",
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
      <h1 className="text-3xl">Meus Termos</h1>

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
