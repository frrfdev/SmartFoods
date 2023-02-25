export interface LoginFormProps {
  name: string;
  whatsapp: string;
  paymentMethod: string;
  observation: string;
}

export interface LoginFormErrors {
  name?: string;
  whatsapp?: string;
  paymentMethod?: string;
}

export default LoginFormProps;
