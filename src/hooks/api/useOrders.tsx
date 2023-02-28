import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: ENDPOINTS.order.index,
  });
};
