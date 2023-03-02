import type { CategoryData } from "../@types/CategoryData";
import type { OrderData } from "../@types/OrderData";
import type { OrdersFilterData } from "../@types/OrdersFilterData";
import type { ProductData } from "../@types/ProductData";
import crypto from "crypto";

const statuses = [
  { id: "1", name: "Finalizado" },
  { id: "2", name: "Cancelado" },
  { id: "3", name: "Em andamento" },
];

export const getRandomStatus = () => {
  const randomStatusId = Math.floor(Math.random() * 3) + 1;
  return statuses.find((status) => status.id === randomStatusId.toString());
};

const orders: OrderData[] = Array.from({ length: 15 }, (_, i) => {
  const randomStatus = getRandomStatus();

  return {
    date: new Date().toISOString(),
    id: `${i}${Math.random()}`,
    statusId: randomStatus?.id || "",
    statusName: randomStatus?.name || "",
    userId: "1",
    userName: `João ${i}`,
    value: Math.random() * 100,
  };
});

export const ordersApi = {
  getOrders: (page: number, pageSize: number, filter: OrdersFilterData) => {
    const start = page * pageSize;
    const end = page * pageSize + pageSize;

    const filteredOrders = orders.filter((order) =>
      filter.statusId !== "" ? order.statusId === filter.statusId : true
    );

    return {
      data: filteredOrders.slice(start, end),
      pageCount: filteredOrders.length,
    };
  },
};

const categories: CategoryData[] = Array.from({ length: 3 }, (_, i) => {
  return {
    title: `Category ${i}`,
    description: "Description of the category",
    id: `${i}`,
  };
});

const products: ProductData[] = Array.from({ length: 15 }, (_, i) => {
  const categoryId = `${Math.floor(Math.random() * 3) + 1}`;
  return {
    title: `Product ${i}`,
    description: "Description of the product",
    price: Math.random() * 100,
    promotionalPrice: Math.random() * 100,
    category_id: categoryId,
    category: categories.find((category) => category.id === categoryId),
    subcategory_id: "1",
    type_id: "1",
    id: crypto.randomBytes(20).toString("hex"),
  };
});

export const productsApi = {
  getProducts: () => {
    return products;
  },
};
