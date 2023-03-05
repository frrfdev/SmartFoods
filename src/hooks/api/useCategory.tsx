import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useErrorContext } from "../../context/ErrorContext";
import type { ResponseErrorData } from "../../@types/RequestErrorData";
import type { CategoryFormProps } from "../../components/CategoryForm/CategoryForm.types";
import { categoriesApi } from "../../mocks/api";
import crypto from "crypto";

export const useCategory = () => {
  const queryClient = useQueryClient();
  const { setError } = useErrorContext();

  const storeCategoryMutation = useMutation({
    mutationFn: (categoryData: CategoryFormProps) => {
      return new Promise(() => categoriesApi.storeCategory(categoryData));
      // return ENDPOINTS.category.store(categoryData);
    },
    onMutate: async (newCategory: CategoryFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["categories"] });

      const optimisticCategory = {
        ...newCategory,
        id: crypto.randomBytes(20).toString("hex"),
      };

      queryClient.setQueryData(["categories"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return [...oldData, optimisticCategory];
      });

      return { optimisticCategory };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      if (context) {
        queryClient.setQueryData(["categories"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.optimisticCategory.id ? data : old
          );
        });
      }
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: (categoryData: CategoryFormProps) => {
      return new Promise(() => categoriesApi.updateTerm(categoryData));
      // return ENDPOINTS.term.update(categoryData);
    },
    onMutate: async (updatedCategory: CategoryFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["categories"] });

      queryClient.setQueryData(["categories"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return oldData.map((old) =>
          old.id === updatedCategory.id ? updatedCategory : old
        );
      });

      return { updatedTerm: updatedCategory };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      if (context) {
        queryClient.setQueryData(["categories"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.updatedTerm.id ? data : old
          );
        });
      }
    },
  });

  return {
    storeCategoryMutation,
    updateCategoryMutation,
  };
};
