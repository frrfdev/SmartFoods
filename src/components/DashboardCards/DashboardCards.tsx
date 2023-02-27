import React from "react";
import { Card } from "../Card/Card";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdRequestQuote } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";

export const DashboardCards = () => {
  return (
    <div className="flex w-full basis-full flex-wrap gap-4">
      <Card
        label="Vendas do mês"
        value={new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(180000)}
        icon={AiFillDollarCircle}
      />
      <Card label="Número de Pedidos" value="5989" icon={MdRequestQuote} />
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
  );
};
