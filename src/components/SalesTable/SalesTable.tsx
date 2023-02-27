import React from "react";
import { Filter } from "./Filter/Filter";
import { HiDocumentText } from "react-icons/hi";
import type { PaginationState } from "@tanstack/react-table";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { BiDotsHorizontal } from "react-icons/bi";
import { Pagination } from "./Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import type { SaleData } from "../../@types/SaleData";
import { useRouter } from "next/router";
import { Table } from "../Table/Table";
import { StatusTag } from "../StatusTag/StatusTag";
import { Formatter } from "../../utils/formatter";

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

const getStatusTagStatuses = (status: string) => {
  switch (status) {
    case "Finalizado":
      return "success";
    case "Cancelado":
      return "error";
    default:
      return "warning";
  }
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
          className="flex min-w-min items-center gap-2"
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
          <span className="flex w-full">{Formatter.brl(info.getValue())}</span>
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
        return (
          <StatusTag status={getStatusTagStatuses(info.getValue())}>
            {info.getValue()}
          </StatusTag>
        );
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

  const dataQuery = useQuery({
    queryKey: ["data", fetchDataOptions],
    queryFn: () => fetchData(fetchDataOptions),
    keepPreviousData: true,
  });

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
      <Table table={table}></Table>
      <Pagination table={table} />
      {dataQuery.isFetching ? "Loading..." : null}
    </div>
  );
};
