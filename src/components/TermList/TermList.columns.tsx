import { createColumnHelper } from "@tanstack/react-table";
import type { TermData } from "../../@types/TermData";

const columnHelper = createColumnHelper<TermData>();

export const columns = [
  columnHelper.accessor("title", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: () => <span>Nome</span>,
  }),
  columnHelper.accessor("description", {
    cell: () => <span className="cursor-pointer text-gray-600">Editar</span>,
    header: () => <span className="w-full text-right">Ação</span>,
  }),
];
