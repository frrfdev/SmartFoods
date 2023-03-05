export interface TermFormProps {
  termId: string;
  title: string;
  description: string;
  id?: string;
}

export interface TermFormErrors {
  termId?: string;
  title?: string;
  description?: string;
}
