import { useQuery } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: ENDPOINTS.user.index,
  });
};
