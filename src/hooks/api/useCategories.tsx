import { useQuery } from "@tanstack/react-query";
import { categoriesApi } from "../../mocks/api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return categoriesApi.getCategories();
      // return ENDPOINTS.category.index
    },
  });
};
