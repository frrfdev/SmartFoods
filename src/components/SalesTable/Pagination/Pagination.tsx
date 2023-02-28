import type { Table } from "@tanstack/react-table";
import React from "react";
import type { OrderData } from "../../../@types/OrderData";
import {
  FaBackward,
  FaCaretLeft,
  FaCaretRight,
  FaForward,
} from "react-icons/fa";

type PageButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const PageButton = ({ children, ...rest }: PageButtonProps) => {
  return (
    <button
      {...rest}
      className={`flex h-8 w-8 cursor-pointer  items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:border-2 hover:border-red-600 hover:bg-white hover:text-red-600`}
    >
      {children}
    </button>
  );
};

export interface PaginationProps {
  table: Table<OrderData>;
}

export const Pagination = ({ table }: PaginationProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>

      <div className="flex gap-3">
        <PageButton
          className="rounded border p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          <span>
            <FaBackward size={16} />
          </span>
        </PageButton>
        <PageButton
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <span>
            <FaCaretLeft size={22} />
          </span>
        </PageButton>
        <PageButton
          className="rounded border p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <FaCaretRight size={22} />
        </PageButton>
        <PageButton
          className="rounded border p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          <FaForward size={16} />
        </PageButton>
      </div>

      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};
