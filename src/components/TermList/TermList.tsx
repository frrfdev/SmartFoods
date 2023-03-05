import React from "react";
import { Table } from "../Table/Table";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useTerms } from "../../hooks/api/useTerms";
import type { TermData } from "../../@types/TermData";

const columnHelper = createColumnHelper<TermData>();

interface TermListProps {
  handleEditTerm: (term: TermData) => void;
}

export const TermList = ({ handleEditTerm }: TermListProps) => {
  const { data: terms } = useTerms();

  const columns = [
    columnHelper.accessor("title", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Nome</span>,
    }),
    columnHelper.accessor("description", {
      cell: (record) => (
        <span
          className="cursor-pointer text-gray-600"
          onClick={() => handleEditTerm(record.row.original)}
        >
          Editar
        </span>
      ),
      header: () => <span className="w-full text-right">Ação</span>,
    }),
  ];

  const table = useReactTable({
    data: terms ?? [],
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
