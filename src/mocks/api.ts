import type { CategoryData } from "../@types/CategoryData";
import type { OrderData } from "../@types/OrderData";
import type { OrdersFilterData } from "../@types/OrdersFilterData";
import type { ProductData } from "../@types/ProductData";
import crypto from "crypto";
import type { TermData } from "../@types/TermData";
import type { TermFormProps } from "../components/TermForm/TermForm.types";
import type { CategoryFormProps } from "../components/CategoryForm/CategoryForm.types";
import type ProductFormProps from "../components/ProductForm/ProductForm.types";
import type { ProductConfigData } from "../components/ProductForm/ProductForm";

const statuses = [
  { id: "1", name: "Finalizado" },
  { id: "2", name: "Cancelado" },
  { id: "3", name: "Em andamento" },
];

const categories = [
  {
    title: "Pizza",
    description: "",
    categoryId: "",
    id: "1",
  },
  {
    title: "Hamburguer",
    description: "",
    categoryId: "",
    id: "2",
  },
  {
    title: "Taco",
    description: "",
    categoryId: "",
    id: "3",
  },
] as CategoryData[];

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

const products: ProductData[] = Array.from({ length: 2 }, (_, i) => {
  const categoryId = `${Math.floor(Math.random() * 3) + 1}`;
  return {
    title: `Product ${i}`,
    description: "Description of the product",
    price: Math.random() * 100,
    promotionalPrice: Math.random() * 100,
    categoryId: categoryId,
    category: categories.find((category) => category.id === categoryId),
    subCategoryId: "1",
    typeId: "1",
    id: crypto.randomBytes(20).toString("hex"),
    configs: [
      {
        configs: [
          {
            value: "1",
            label: "Borda de Chocolate",
            key: "1",
            price: 1,
          },
          {
            value: "1",
            label: "Borda de Catupiry",
            key: "1",
            price: 2,
          },
        ],
        id: "1",
        title: "Borda",
      },
    ] as ProductConfigData[],
  };
});

export const productsApi = {
  getProducts: () => {
    return products;
  },
  storeProduct: (product: ProductFormProps) => {
    const newProduct = {
      ...product,
      id: crypto.randomBytes(20).toString("hex"),
    };
    products.push(newProduct);
    return newProduct;
  },
  updateProduct: (product: ProductFormProps) => {
    if (product.id) {
      const productIndex = products.findIndex((p) => p.id === product.id);
      products[productIndex] = product as ProductData;
      return product;
    }
  },
};

const terms = [
  {
    title: "Borda",
    description: "Borda de pizza",
    termId: "",
    id: "1",
  },
  {
    title: "Sabor",
    description: "Sabor de pizza",
    termId: "",
    id: "2",
  },
  {
    title: "Tamanho",
    description: "Tamanho de pizza",
    termId: "",
    id: "3",
  },
] as TermData[];

export const termsApi = {
  getTerms: () => {
    return terms;
  },
  storeTerm: (term: TermFormProps) => {
    const newTerm = { ...term, id: crypto.randomBytes(20).toString("hex") };
    terms.push(newTerm);
    return newTerm;
  },
  updateTerm: (term: TermFormProps) => {
    if (term.id) {
      const termIndex = terms.findIndex((t) => t.id === term.id);
      terms[termIndex] = term as TermData;
      return;
    }
    throw new Error("Term id not found");
  },
};

export const categoriesApi = {
  getCategories: () => {
    return categories;
  },
  storeCategory: (category: CategoryFormProps) => {
    const newCategory = {
      ...category,
      id: crypto.randomBytes(20).toString("hex"),
    };
    categories.push(newCategory);
    return newCategory;
  },
  updateTerm: (category: CategoryFormProps) => {
    if (category.id) {
      const categoryIndex = terms.findIndex((t) => t.id === category.id);
      categories[categoryIndex] = category as CategoryData;
      return;
    }
    throw new Error("Category id not found");
  },
};
