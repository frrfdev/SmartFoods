export interface UploadProps {
  name?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
}
