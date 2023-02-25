import type { TableClasses } from "./Table.types";

export const defaultClasses = {
  tableWrapper: "rounded-md	border-2 border-gray-100 px-5",
  table: "table w-full overflow-x-scroll",
  thead: "w-full border-b-2 border-gray-100",
  th: "py-4 text-left",
  tr: "border-b-2 border-gray-100 last:border-none",
  td: "min-w-min py-6 ",
} as TableClasses;
