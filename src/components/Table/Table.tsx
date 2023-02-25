import React from "react";
import type { TableProps } from "./Table.types";
import { flexRender } from "@tanstack/react-table";
import { defaultClasses } from "./Table.styles";

export const Table = <T,>({ table, classes }: TableProps<T>) => {
  return (
    <div className={classes?.tableWrapper || defaultClasses.tableWrapper}>
      <table className={classes?.table || defaultClasses.table}>
        <thead className={classes?.thead || defaultClasses.thead}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={classes?.th || defaultClasses.th}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className={classes?.tr || defaultClasses.tr}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={classes?.td || defaultClasses.td}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
