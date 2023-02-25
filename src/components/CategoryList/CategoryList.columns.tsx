import { createColumnHelper } from "@tanstack/react-table";
import type { CategoryData } from "../../@types/CategoryData";

const columnHelper = createColumnHelper<CategoryData>();

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
