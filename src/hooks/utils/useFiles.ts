import React from "react";

export const useFiles = () => {
  const [files, setFiles] = React.useState<File[]>([]);

  return {
    files,
    setFiles,
  };
};
