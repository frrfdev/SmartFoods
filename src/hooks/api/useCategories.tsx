import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: ENDPOINTS.category.index,
  });
};
