import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";
import { useErrorContext } from "../../context/ErrorContext";
import type { ResponseErrorData } from "../../@types/RequestErrorData";
import type { CategoryFormProps } from "../../components/CategoryForm/CategoryForm.types";

export const useCategory = (id: string | undefined = undefined) => {
  const { setError } = useErrorContext();

  const storeCategoryMutation = useMutation({
    mutationFn: (categoryData: CategoryFormProps) => {
      return ENDPOINTS.category.store(categoryData);
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
  });

  const updateCategoryMutation = useMutation({
    mutationFn: (categoryData: CategoryFormProps) => {
      return id
        ? ENDPOINTS.category.update(id, categoryData)
        : Promise.reject();
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
  });

  const storeCategory = (categoryData: CategoryFormProps) => {
    try {
      storeCategoryMutation.mutate(categoryData);
    } catch (error) {
      setError((error as ResponseErrorData).message);
    }
  };

  const updateCategory = (categoryData: CategoryFormProps) => {
    try {
      updateCategoryMutation.mutate(categoryData);
    } catch (error) {
      console.log(error);
      // setError((error as any).message);
    }
  };

  return {
    storeCategory,
    isStoringCategory: storeCategoryMutation.isLoading,
    isErrorStoringCategory: storeCategoryMutation.isError,
    updateCategory,
    isUpdatingCategory: updateCategoryMutation.isLoading,
    isErrorUpdatingCategory: updateCategoryMutation.isError,
  };
};
