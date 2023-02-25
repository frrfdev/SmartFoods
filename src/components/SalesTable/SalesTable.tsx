import React from "react";
import { Filter } from "./Filter/Filter";
import { HiDocumentText } from "react-icons/hi";
import type { PaginationState } from "@tanstack/react-table";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiDotsHorizontal } from "react-icons/bi";
import { Pagination } from "./Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import type { SaleData } from "../../@types/SaleData";
import { useRouter } from "next/router";

const mockData: { data: SaleData[]; pageCount: number } = {
  data: [
    {
      user: {
        name: "John Doe",
      },
      id: 1,
      value: 1000,
      date: "09/08/2022",
      status: {
        name: "Finalizado",
      },
    },
    {
      user: {
        name: "John Doe",
      },
      id: 1,
      value: 1500,
      date: "19/08/2022",
      status: {
        name: "Cancelado",
      },
    },
    {
      user: {
        name: "John Doe",
      },
      id: 1,
      value: 1010,
      date: "09/09/2022",
      status: {
        name: "Pendente",
      },
    },
  ],
  pageCount: 3,
};

const columnHelper = createColumnHelper<SaleData>();

export const SalesTable = () => {
  const router = useRouter();

  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };

  const handleOpenOrder = (id: string) => {
    router.push(`/orders/${id}`);
  };

  const columns = [
    columnHelper.accessor("user.name", {
      cell: (info) => (
        <strong
          className="flex items-center gap-2"
          onClick={() => handleOpenOrder("1")}
        >
          <span className="text-red-600">
            <HiDocumentText size={26} />
          </span>

          <span>{info.getValue()}</span>
        </strong>
      ),
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor("id", {
      cell: (info) => <span className="text-gray-400">{info.getValue()}</span>,
      header: () => <span>ID</span>,
    }),
    columnHelper.accessor("value", {
      cell: (info) => {
        return (
          <span className="flex w-full">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(info.getValue())}
          </span>
        );
      },
      header: () => <span>Valor</span>,
    }),
    columnHelper.accessor("date", {
      cell: (info) => <span className="text-gray-400">{info.getValue()}</span>,
      header: () => <span>Data</span>,
    }),
    columnHelper.accessor("status.name", {
      cell: (info) => {
        switch (info.getValue()) {
          case "Finalizado":
            return (
              <span className="rounded-md bg-green-100 py-4 px-8 text-sm font-bold uppercase text-green-500">
                {info.getValue()}
              </span>
            );
          case "Cancelado":
            return (
              <span className="rounded-md bg-red-100 py-4 px-8 text-sm font-bold uppercase text-red-500">
                {info.getValue()}
              </span>
            );
          default:
            return (
              <span className="rounded-md bg-yellow-100 py-4 px-8 text-sm font-bold uppercase text-yellow-500">
                {info.getValue()}
              </span>
            );
        }
      },
      header: () => <span>Status</span>,
    }),
    columnHelper.accessor("id", {
      cell: () => (
        <span className="flex w-full cursor-pointer justify-end text-gray-400">
          <BiDotsHorizontal size={22} />
        </span>
      ),
      header: () => <span className="flex w-full justify-end">Action</span>,
    }),
  ];

  const fetchData = (pagination: PaginationState) => mockData;

  const dataQuery = useQuery(
    ["data", fetchDataOptions],
    () => fetchData(fetchDataOptions),
    { keepPreviousData: true }
  );

  const defaultData = React.useMemo(() => [], []);

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: dataQuery.data?.data ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
    pageCount: dataQuery.data?.pageCount ?? -1,
    manualPagination: true,
  });

  return (
    <div className="flex flex-col gap-6">
      <Filter />
      <div className="w-full overflow-y-auto	rounded-md border-2 border-gray-100 px-5">
        <table className="m-0 table w-full p-0">
          <thead className="w-full border-b-2 border-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="table-cell py-4 px-4 text-left"
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
          <tbody className="w-full">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b-2 border-gray-100 last:border-none"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="table-cell w-full whitespace-nowrap py-6 px-4"
                  >
                    <span className="px-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
      {dataQuery.isFetching ? "Loading..." : null}
    </div>
  );
};
