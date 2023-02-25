import { useMutation } from "@tanstack/react-query";
import { ENDPOINTS } from "../../services/endpoints";
import { useErrorContext } from "../../context/ErrorContext";
import type { ResponseErrorData } from "../../@types/RequestErrorData";
import type { UserFormProps } from "../../components/UserForm/UserForm.types";

export const useUser = (id: string | undefined = undefined) => {
  const { setError } = useErrorContext();

  const storeUserMutation = useMutation({
    mutationFn: (userData: UserFormProps) => {
      return ENDPOINTS.user.store(userData);
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
  });

  const updateUserMutation = useMutation({
    mutationFn: (userData: UserFormProps) => {
      return id ? ENDPOINTS.user.update(id, userData) : Promise.reject();
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
  });

  const storeCategory = (categoryData: UserFormProps) => {
    try {
      storeUserMutation.mutate(categoryData);
    } catch (error) {
      setError((error as ResponseErrorData).message);
    }
  };

  const updateCategory = (categoryData: UserFormProps) => {
    try {
      updateUserMutation.mutate(categoryData);
    } catch (error) {
      console.log(error);
      // setError((error as any).message);
    }
  };

  return {
    storeCategory,
    isStoringCategory: storeUserMutation.isLoading,
    isErrorStoringCategory: storeUserMutation.isError,
    updateCategory,
    isUpdatingCategory: updateUserMutation.isLoading,
    isErrorUpdatingCategory: updateUserMutation.isError,
  };
};
