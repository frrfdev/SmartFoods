import type { ProductFormErrors } from "./ProductForm.types";
import type ProductFormProps from "./ProductForm.types";

export const productFormValidator = (
  values: ProductFormProps,
  configs?: { [key in keyof ProductFormProps]?: { required: boolean } }
) => {
  const errors: ProductFormErrors = {};
  if (!values.title) {
    errors.title = "O título é obrigatório";
  }

  if (!values.description) {
    errors.description = "A descrição é obrigatória";
  }

  if (!values.price) {
    errors.price = "O preço é obrigatório";
  }

  if (!values.categoryId) {
    errors.categoryId = "A categoria é obrigatória";
  }

  // if (!values.subCategoryId) {
  //   errors.subCategoryId = "A subcategoria é obrigatória";
  // }

  if (!values.typeId) {
    errors.typeId = "O tipo é obrigatório";
  }

  if (!values.termId && configs?.termId?.required) {
    errors.termId = "O termo é obrigatório";
  }

  // if (!values.options) {
  //   errors.options = "Required";
  // }

  // if (!values.images) {
  //   errors.images = "Required";
  // }

  return errors;
};
