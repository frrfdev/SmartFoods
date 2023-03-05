import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

import { Table } from "../Table/Table";
import type { CategoryData } from "../../@types/CategoryData";
import { useCategories } from "../../hooks/api/useCategories";

interface CategoryListProps {
  handleEditCategory: (category: CategoryData) => void;
}

const columnHelper = createColumnHelper<CategoryData>();

export const CategoryList = ({ handleEditCategory }: CategoryListProps) => {
  const { data } = useCategories();

  const columns = [
    columnHelper.accessor("title", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Nome</span>,
    }),
    columnHelper.accessor("description", {
      cell: (record) => (
        <span
          className="cursor-pointer text-gray-600"
          onClick={() => handleEditCategory(record.row.original)}
        >
          Editar
        </span>
      ),
      header: () => <span className="w-full text-right">Ação</span>,
    }),
  ];

  const table = useReactTable({
    data: data ?? [],
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
