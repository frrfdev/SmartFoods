import Image from "next/image";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import type { CartProps } from "./Cart.types";
import { Input } from "../Input/Input";
import { BackButton } from "../BackButton/BackButton";
import { useRouter } from "next/router";

const styles = {
  full: {
    container: "flex w-full p-20 relative",
    products: "w-full p-10",
    imageContainer: "w-[200px] h-[150px] overflow-hidden rounded-md relative",
    productInfo: "w-full flex justify-between p-5",
    productDetails: "flex flex-col",
    productQuantityControls: "flex flex-col items-end justify-between",
    priceData: "w-full px-20",
    orders: "w-full",
    productName: "text-xl font-bold",
    prices: "flex gap-2 items-center",
    price: "text-md text-gray-400 line-through",
    promotionalPrice: "font-bold text-lg",
    title: "text-4xl",
  },
  compact: {
    container: "border-gray-2 rounded-md border-2 bg-white p-4 drop-shadow-md",
    products: "mt-5 flex flex-col gap-3",
    imageContainer: "relative h-[80px] w-[80px] overflow-hidden rounded-md",
    productInfo: "flex justify-between py-2 pl-2",
    productDetails: "flex min-w-[200px] flex-col justify-between",
    productQuantityControls: "flex flex-col items-end justify-between",
    priceData: "",
    orders: "",
    productName: "",
    prices: "",
    price: "",
    promotionalPrice: "hidden",
    title: "",
  },
};

export const Cart = ({ variant = "compact" }: CartProps) => {
  const router = useRouter();

  const {
    products,
    total,
    subtotal,
    discount,
    shippingTax,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProduct,
  } = useCartContext();

  const classes = styles[variant];

  return (
    <div className={classes.container}>
      {variant === "full" ? (
        <span className="absolute top-0">
          <BackButton></BackButton>
        </span>
      ) : null}
      {products.length === 0 ? (
        <div className="text-center-full flex w-full items-center justify-center">
          <p className="flex w-full flex-col items-center text-gray-400">
            <span>
              <FaShoppingCart size={30} />
            </span>
            Seu carrinho está vazio
          </p>
        </div>
      ) : (
        <>
          <div className={classes.orders}>
            <span className={classes.title}>Carrinho</span>
            <div className={classes.products}>
              {products.map((product) => (
                <div key={product.id} className="flex w-full">
                  <span className={classes.imageContainer}>
                    <Image
                      src="/images/product.jpg"
                      alt="Picture of the author"
                      className="object-cover"
                      fill
                      placeholder="blur"
                      blurDataURL="/images/product.jpg"
                    />
                  </span>

                  <div className={classes.productInfo}>
                    <div className={classes.productDetails}>
                      <span className={classes.productName}>
                        {product.title}
                      </span>
                      <span className={classes.prices}>
                        <span className={classes.price}>
                          R$ {product.price}
                        </span>
                        <span className={classes.promotionalPrice}>
                          R$ {product.promotionalPrice || product.price}
                        </span>
                      </span>
                    </div>
                    <div className={classes.productQuantityControls}>
                      <Button
                        size="xs"
                        round
                        status="text"
                        onClick={() => removeProduct(product.id)}
                      >
                        <span>
                          <FaTimes />
                        </span>
                      </Button>
                      <div className="flex items-center gap-2">
                        <Button
                          size="xs"
                          status="secondary"
                          onClick={() => decreaseProductQuantity(product.id)}
                        >
                          -
                        </Button>
                        <span>{product.quantity}</span>
                        <Button
                          size="xs"
                          onClick={() => increaseProductQuantity(product.id)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.priceData}>
            <div className="mt-5 flex flex-col gap-2 border-2 border-gray-100 p-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>R$ {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Desconto</span>
                <span>R$ {discount}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Entrega</span>
                <span>R$ {shippingTax}</span>
              </div>
            </div>

            {variant === "full" ? (
              <div className="mt-5 flex justify-end gap-2">
                <Input
                  variant="outlined"
                  placeholder="Insira seu cupom"
                ></Input>
                <Button status="secondary-outline">Adicionar</Button>
              </div>
            ) : null}

            <div className="mt-5 flex justify-between">
              <span>Total</span>
              <span>R$ {total}</span>
            </div>

            <div className="mt-5">
              {variant === "full" ? (
                <Button
                  stretch
                  onClick={() => {
                    router.push("/checkout");
                  }}
                >
                  <span className="text-sm">IR PARA CHECKOUT</span>
                </Button>
              ) : (
                <Button
                  stretch
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  <span className="text-sm">FINALIZAR PEDIDO</span>
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
