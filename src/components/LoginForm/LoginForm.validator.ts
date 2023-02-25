import type { LoginFormErrors, LoginFormProps } from "./LoginForm.types";

export const loginFormValidator = (values: LoginFormProps) => {
  const errors: LoginFormErrors = {};
  if (!values.email) {
    errors.email = "Por favor, insira seu e-mail";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Endereço de e-mail inválido";
  }

  if (!values.password) {
    errors.password = "Por favor, insira sua senha";
  }

  return errors;
};
