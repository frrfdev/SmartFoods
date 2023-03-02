import React from "react";
import Dialog from "@mui/material/Dialog";
import type { ProductPreviewModalProps } from "./ProductPreviewModal.types";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductPreviewModal = ({
  product,
  ...props
}: ProductPreviewModalProps) => {
  return (
    <Dialog
      {...props}
      classes={{
        paper: "w-[100%] bg-red-500 p-20 m-0 max-w-auto",
        container: "w-full",
      }}
      maxWidth="lg"
    >
      <ProductCard variant="preview" product={product}></ProductCard>
    </Dialog>
  );
};
