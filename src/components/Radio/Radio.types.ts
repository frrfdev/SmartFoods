type RadioValue = string | number;

export interface RadioProps {
  value: RadioValue;
  name: string;
  content: React.ReactNode;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
