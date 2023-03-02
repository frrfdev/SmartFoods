import React from "react";
import { Filter } from "./Filter/Filter";
import { HiDocumentText } from "react-icons/hi";
import type { PaginationState } from "@tanstack/react-table";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Pagination } from "./Pagination/Pagination";
import { useQuery } from "@tanstack/react-query";
import type { OrderData } from "../../@types/OrderData";
import { useRouter } from "next/router";
import { Table } from "../Table/Table";
import { StatusTag } from "../StatusTag/StatusTag";
import { Formatter } from "../../utils/formatter";
import { ordersApi } from "../../mocks/api";
import type { OrdersFilterData } from "../../@types/OrdersFilterData";
import { ThreeDotMenu } from "../ThreeDotMenu/ThreeDotMenu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Button } from "../Button/Button";

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

const columnHelper = createColumnHelper<OrderData>();

export const SalesTable = () => {
  const router = useRouter();

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [filter, setFilter] = React.useState<OrdersFilterData>({
    statusId: "",
  });

  const handleOpenOrder = (id: string) => {
    router.push(`/orders/${id}`);
  };

  const columns = [
    columnHelper.accessor("userName", {
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
      cell: (info) => (
        <span className="text-gray-400">
          {Formatter.dateTime(info.getValue())}
        </span>
      ),
      header: () => <span>Data</span>,
    }),
    columnHelper.accessor("statusName", {
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className="flex h-full w-full items-center justify-center">
              <ThreeDotMenu></ThreeDotMenu>
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="rounded-md bg-white py-2 px-1 shadow-md data-[state='open']:animate-fadein data-[state='closed']:animate-fadeout"
              sideOffset={5}
            >
              <DropdownMenu.Item className="DropdownMenuItem">
                <Button size="sm" status="text">
                  Visualizar
                </Button>
              </DropdownMenu.Item>

              <DropdownMenu.Arrow className="" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      ),
      header: () => <span className="flex w-full justify-end">Action</span>,
    }),
  ];

  const fetchData = (pag: PaginationState, filt: OrdersFilterData) =>
    ordersApi.getOrders(pag.pageIndex, pag.pageSize, filt);

  const dataQuery = useQuery({
    queryKey: ["data", pagination, filter],
    queryFn: () => fetchData(pagination, filter),
    keepPreviousData: false,
  });

  const defaultData = React.useMemo(() => [], []);

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

  console.log("aaa");

  return (
    <div className="flex flex-col gap-6">
      <Filter setFilter={setFilter} filter={filter} />
      <Table table={table}></Table>
      <Pagination table={table} />
      {dataQuery.isFetching ? "Loading..." : null}
    </div>
  );
};
