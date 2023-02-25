import type { LoginFormErrors, LoginFormProps } from "./CheckoutForm.types";

export const checkoutFormValidator = (values: LoginFormProps) => {
  const errors: LoginFormErrors = {};
  if (!values.name) {
    errors.name = "Por favor, insira seu nome";
  }

  if (!values.whatsapp) {
    errors.whatsapp = "Por favor, insira seu whatsapp";
  }

  if (!values.paymentMethod) {
    errors.paymentMethod = "Por favor, selecione uma forma de pagamento";
  }

  return errors;
};
