import type React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "primary" | "secondary" | "secondary-outline" | "text" | "confirm";
  children: React.ReactNode;
  isActive?: boolean;
  size?: "sm" | "md" | "lg" | "xs";
  round?: boolean;
  stretch?: boolean;
}
