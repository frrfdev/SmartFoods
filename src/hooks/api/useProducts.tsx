import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: ENDPOINTS.product.index,
  });
};
