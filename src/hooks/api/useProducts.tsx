import { useQuery } from "@tanstack/react-query";
import { productsApi } from "../../mocks/api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    // queryFn: ENDPOINTS.product.index,
    queryFn: () => {
      return productsApi.getProducts();
    },
  });
};
