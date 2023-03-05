import { createContext, useContext, useState } from "react";
import type { CartProduct } from "../@types/CartProduct";

import { useMemo } from "react";

export interface CartContextProps {
  products: CartProduct[];
  addProduct: (cartProduct: CartProduct, quantity?: number) => void;
  subtotal: number;
  total: number;
  discount: number;
  setDiscount: (discount: number) => void;
  shippingTax: number;
  setShippingTax: (shippingTax: number) => void;
  increaseProductQuantity: (id: string) => void;
  decreaseProductQuantity: (id: string) => void;
  removeProduct: (id: string) => void;
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps
);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([
    {
      id: "1",
      title: "Pizza",
      description: "Pizza de calabreza",
      price: 34.1,
      promotionalPrice: 32.1,
      categoryId: "pizza",
      subCategoryId: "calabreza",
      typeId: "pizza",
      quantity: 1,
    },
  ]);
  const [discount, setDiscount] = useState(0);
  const [shippingTax, setShippingTax] = useState(0);

  const subtotal = useMemo(() => {
    return products
      .map(
        (product) =>
          (product.promotionalPrice || product.price) * product.quantity
      )
      .reduce((a, b) => a + b, 0);
  }, [products]);

  const total = useMemo(
    () => subtotal + shippingTax - discount,
    [subtotal, shippingTax, discount]
  );

  const addProduct = (cartProduct: CartProduct, quantity?: number) => {
    const productIndex = products.findIndex((p) => p.id === cartProduct.id);

    if (productIndex === -1) {
      setProducts([...products, { ...cartProduct, quantity: quantity || 1 }]);
    } else {
      const newProducts = [...products];
      const foundProduct = newProducts[productIndex];
      if (foundProduct) {
        foundProduct.quantity += quantity || 1;
        setProducts(newProducts);
      }
    }
  };

  const removeProduct = (cartProductId: string) => {
    const productIndex = products.findIndex((p) => p.id === cartProductId);

    if (productIndex !== -1) {
      const newProducts = [...products];
      newProducts.splice(productIndex, 1);
      setProducts(newProducts);
    }
  };

  const increaseProductQuantity = (cartProductId: string) =>
    updateProductQuantity(cartProductId, "add");
  const decreaseProductQuantity = (cartProductId: string) =>
    updateProductQuantity(cartProductId, "subtract");

  const updateProductQuantity = (
    cartProductId: string,
    method: "add" | "subtract"
  ) => {
    const productIndex = products.findIndex((p) => p.id === cartProductId);

    if (productIndex !== -1) {
      const newProducts = [...products];
      const foundProduct = newProducts[productIndex];
      if (foundProduct) {
        if (method === "add") {
          foundProduct.quantity += 1;
        } else {
          foundProduct.quantity -= 1;
          if (foundProduct.quantity <= 0) newProducts.splice(productIndex, 1);
        }
        setProducts(newProducts);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        total,
        discount,
        subtotal,
        shippingTax,
        setDiscount,
        setShippingTax,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
