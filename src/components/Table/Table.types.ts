import type { Table } from "@tanstack/react-table";

export interface TableProps<T> {
  table: Table<T>;
  classes?: TableClasses;
}

export interface TableClasses {
  tableWrapper?: string;
  table?: string;
  thead?: string;
  th?: string;
  tr?: string;
  td?: string;
}
