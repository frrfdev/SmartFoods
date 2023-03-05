export interface TermData {
  id: string;
  title: string;
  description: string;
  termId: string;
  term?: {
    name: string;
    id: string;
  };
}
