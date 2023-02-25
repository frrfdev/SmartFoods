import type {
  CategoryFormErrors,
  CategoryFormProps,
} from "./CategoryForm.types";

export const categoryFormValidator = (values: CategoryFormProps) => {
  const errors: CategoryFormErrors = {};
  if (!values.title) {
    errors.title = "Por favor, insira um título";
  }

  if (!values.description) {
    errors.description = "Por favor, insira uma descrição";
  }

  return errors;
};
