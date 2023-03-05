import { useQuery } from "@tanstack/react-query";
// import { ENDPOINTS } from "../../services/endpoints";
import { termsApi } from "../../mocks/api";

export const useTerms = () => {
  return useQuery({
    queryKey: ["terms"],
    // queryFn: ENDPOINTS.term.index,
    queryFn: () => termsApi.getTerms(),
  });
};
