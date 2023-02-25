import type React from "react";

export type InputProps = Omit<React.HTMLProps<HTMLInputElement>, "prefix"> & {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: "normal" | "outlined" | "clean";
  textarea?: boolean;
};
