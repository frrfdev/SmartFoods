import type {
  ForgotPasswordFormErrors,
  ForgotPasswordFormProps,
} from "./ForgotPasswordForm.types";

export const loginFormValidator = (values: ForgotPasswordFormProps) => {
  const errors: ForgotPasswordFormErrors = {};
  if (!values.email) {
    errors.email = "Por favor, insira seu e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Endereço de e-mail inválido";
  }

  return errors;
};

export default loginFormValidator;
