import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { BackButton } from "../../components/BackButton/BackButton";
import { useRouter } from "next/router";
import { ProductForm } from "../../components/ProductForm/ProductForm";

export const ProductCreate = () => {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <PrivatePage>
      <div className="flex w-full flex-col gap-8 p-5 px-4 lg:px-60">
        <BackButton onClick={handleGoBack}></BackButton>
        <h1 className="w-full text-center text-2xl font-bold">
          Cadastrar novo produto
        </h1>

        <ProductForm />
      </div>
    </PrivatePage>
  );
};

export default ProductCreate;
