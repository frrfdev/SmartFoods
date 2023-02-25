import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { Card } from "../../components/Card/Card";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdRequestQuote } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { SalesTable } from "../../components/SalesTable/SalesTable";
import { useAuthContext } from "../../context/AuthContext";

export const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <PrivatePage>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">
              Bem vindo, {user?.nome}
            </span>
            <span className="text-sm text-gray-400">
              {new Intl.DateTimeFormat("pt-br", {
                dateStyle: "medium",
              }).format(new Date())}
            </span>
          </div>

          <div className="flex w-full basis-full flex-wrap gap-4">
            <Card
              label="Vendas do mês"
              value={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(180000)}
              icon={AiFillDollarCircle}
            />
            <Card
              label="Número de Pedidos"
              value="5989"
              icon={MdRequestQuote}
            />
            <Card
              label="Valor Total de Vendas"
              value={new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(180000)}
              icon={FaFileInvoiceDollar}
              iconSize={28}
            />
          </div>

          <SalesTable />
        </div>
      </div>
    </PrivatePage>
  );
};

export default Dashboard;
