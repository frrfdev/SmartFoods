import type { CategoryFormErrors, CategoryFormProps } from "./TermForm.types";

export const termFormValidator = (values: CategoryFormProps) => {
  const errors: CategoryFormErrors = {};
  if (!values.title) {
    errors.title = "Por favor, insira um título";
  }

  if (!values.description) {
    errors.description = "Por favor, insira uma descrição";
  }

  if (!values.termId) {
    errors.termId = "Por favor, escolha um termo";
  }

  return errors;
};
