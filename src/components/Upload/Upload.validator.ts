import type { FileError } from "react-dropzone";

export const validator = (file: File): FileError | FileError[] | null => {
  if (file.size > 1000000) {
    return {
      code: "file-too-large",
      message: "File is too large",
    };
  }

  if (!file.type.startsWith("image/")) {
    return {
      code: "file-invalid-type",
      message: "O arquivo deve ser uma imagem",
    };
  }

  return null;
};
