import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { TermFormProps } from "../../components/TermForm/TermForm.types";
import type { ResponseErrorData } from "../../@types/RequestErrorData";
import { useErrorContext } from "../../context/ErrorContext";
import { termsApi } from "../../mocks/api";
import crypto from "crypto";

export const useTerm = () => {
  const queryClient = useQueryClient();
  const { setError } = useErrorContext();

  const storeTermMutation = useMutation({
    mutationFn: (termData: TermFormProps) => {
      return new Promise(() => termsApi.storeTerm(termData));
      // return ENDPOINTS.term.store(termData);
    },
    onMutate: async (newTerm: TermFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["terms"] });

      const optimisticTerm = {
        ...newTerm,
        id: crypto.randomBytes(20).toString("hex"),
      };

      queryClient.setQueryData(["terms"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return [...oldData, optimisticTerm];
      });

      return { optimisticTerm };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      if (context) {
        queryClient.setQueryData(["terms"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.optimisticTerm.id ? data : old
          );
        });
      }
    },
  });

  const updateTermMutation = useMutation({
    mutationFn: (termData: TermFormProps) => {
      return new Promise(() => termsApi.updateTerm(termData));
      // return ENDPOINTS.term.update(termData);
    },
    onMutate: async (updatedTerm: TermFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["terms"] });

      queryClient.setQueryData(["terms"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return oldData.map((old) =>
          old.id === updatedTerm.id ? updatedTerm : old
        );
      });

      return { updatedTerm };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      if (context) {
        queryClient.setQueryData(["terms"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.updatedTerm.id ? data : old
          );
        });
      }
    },
  });

  return { storeTermMutation, updateTermMutation };
};
