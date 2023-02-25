import type { ProductFormErrors } from "./ProductForm.types";
import type ProductFormProps from "./ProductForm.types";

export const productFormValidator = (values: ProductFormProps) => {
  const errors: ProductFormErrors = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.description) {
    errors.description = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  }

  if (!values.categoryId) {
    errors.categoryId = "Required";
  }

  if (!values.subCategoryId) {
    errors.subCategoryId = "Required";
  }

  if (!values.typeId) {
    errors.typeId = "Required";
  }

  if (!values.options) {
    errors.options = "Required";
  }

  if (!values.images) {
    errors.images = "Required";
  }

  return errors;
};
