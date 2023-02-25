export interface FormGroupProps {
  label: string;
  children: React.ReactNode;
  errors?: string;
  touched?: boolean;
  isRequired?: boolean;
}
