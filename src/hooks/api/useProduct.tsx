import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ResponseErrorData } from "../../@types/RequestErrorData";
import { useErrorContext } from "../../context/ErrorContext";
import { productsApi } from "../../mocks/api";
import crypto from "crypto";
import type ProductFormProps from "../../components/ProductForm/ProductForm.types";

export const useProduct = () => {
  const queryClient = useQueryClient();
  const { setError } = useErrorContext();

  const storeProductMutation = useMutation({
    mutationFn: async (productData: ProductFormProps) => {
      return productsApi.storeProduct(productData);
      // return ENDPOINTS.product.store(productData);
    },
    onMutate: async (newProduct: ProductFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      const optimisticProduct = {
        ...newProduct,
        id: crypto.randomBytes(20).toString("hex"),
      };

      queryClient.setQueryData(["products"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return [...oldData, optimisticProduct];
      });

      return { optimisticProduct };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      if (context) {
        queryClient.setQueryData(["products"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.optimisticProduct.id ? data : old
          );
        });
      }
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: async (productData: ProductFormProps) => {
      return productsApi.updateProduct(productData);
      // return ENDPOINTS.product.update(productData);
    },
    onMutate: async (updatedProduct: ProductFormProps) => {
      await queryClient.cancelQueries({ queryKey: ["products"] });

      queryClient.setQueryData(["products"], (oldData: unknown) => {
        if (!oldData || !Array.isArray(oldData)) return [];
        return oldData.map((old) =>
          old.id === updatedProduct.id ? updatedProduct : old
        );
      });

      return { updatedProduct };
    },
    onError: (error) => {
      setError((error as ResponseErrorData).message);
    },
    onSuccess(data, _, context) {
      console.log("success");
      if (context) {
        queryClient.setQueryData(["terms"], (oldData: unknown) => {
          if (!oldData || !Array.isArray(oldData)) return [];
          return oldData.map((old) =>
            old.id === context.updatedProduct.id ? data : old
          );
        });
      }
    },
  });

  return { storeProductMutation, updateProductMutation };
};
