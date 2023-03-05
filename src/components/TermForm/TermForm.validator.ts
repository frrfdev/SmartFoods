import type { TermFormErrors, TermFormProps } from "./TermForm.types";

export const termFormValidator = (values: TermFormProps) => {
  const errors: TermFormErrors = {};
  if (!values.title) {
    errors.title = "Por favor, insira um título";
  }

  if (!values.description) {
    errors.description = "Por favor, insira uma descrição";
  }

  return errors;
};
