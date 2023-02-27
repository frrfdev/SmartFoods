import type { TableClasses } from "./Table.types";

export const defaultClasses = {
  tableWrapper:
    "w-full overflow-y-auto	rounded-md border-2 border-gray-100 px-5",
  table: "m-0 table w-full p-0",
  thead: "w-full border-b-2 border-gray-100",
  th: "table-cell py-4 px-4 text-left",
  tr: "border-b-2 border-gray-100 last:border-none",
  td: "table-cell w-full whitespace-nowrap py-6 px-4",
} as TableClasses;
