import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { BackButton } from "../../components/BackButton/BackButton";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { CartProductCard } from "../../components/CartProductCard/CartProductCard";

export const Orders = () => {
  const order = {
    number: "255821",
    date: "30/01/2023",
    address: "Rio Jarí 569, casa 2, Bairro Alto Curitiba/PR",
    paymentType: "Mastercard",
    subTotal: 73.98,
    discount: 0.17,
    deliveryFee: 5.0,
    total: 94.84,
    status: {
      name: "Pendente",
    },
  };

  return (
    <PrivatePage>
      <div className="lg: flex flex-col gap-5 p-5 px-80">
        <BackButton />
        <h4 className="text-2xl">Pedido {order.number}</h4>

        <h2 className="flex justify-between text-5xl">
          <span>Número do pedido: {order.number}</span>
          <span className="flex items-center rounded-md bg-yellow-400 px-4 text-2xl text-white">
            {order.status.name}
          </span>
        </h2>
        <div className="text-gray-400">
          Data do pedido: <strong className="text-black">{order.date}</strong>
        </div>
        <div className="text-gray-400">
          Endereço para entrega:{" "}
          <strong className="text-black">{order.address}</strong>
        </div>

        <div className="mt-[50px] flex">
          <div className="w-full pr-20">
            <div>
              <h4 className="text-2xl">Detalhes do pedido</h4>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <CartProductCard quantity={1}></CartProductCard>
              <CartProductCard quantity={2}></CartProductCard>
            </div>
          </div>
          <div className="flex w-full flex-col gap-20 px-10">
            <div className="flex w-full flex-col items-center rounded-lg border-2 border-gray-100 p-4">
              <span>Tipo de pagamento selecionado:</span>
              <span className="my-5 text-2xl text-red-400">
                {order.paymentType}
              </span>
            </div>

            <div className="flex w-full flex-col items-center rounded-lg border-2 border-gray-100 p-4">
              <div className="flex w-full justify-between pb-1">
                <span>Subtotal</span>
                <span>R$ {order.subTotal}</span>
              </div>

              <div className="flex w-full justify-between pb-1">
                <span>Desconto</span>
                <span>
                  {order.discount * 100}% R${" "}
                  {order.subTotal - order.subTotal * order.discount}
                </span>
              </div>

              <div className="border-grey-100 flex w-full justify-between border-b-2 pb-1">
                <span>Entrega</span>
                <span>R$ {order.deliveryFee}</span>
              </div>

              <div className="flex w-full justify-between pb-2">
                <span>Total</span>
                <span>{order.total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivatePage>
  );
};

export default Orders;
