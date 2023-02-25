import React from "react";
import { Input } from "../Input/Input";
import type { InputProps } from "../Input/Input.types";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const ICON_SIZE = 20;

export const PasswordInput = ({ ...props }: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      prefix={
        <span
          className="cursor-pointer text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEye size={ICON_SIZE} />
          ) : (
            <AiFillEyeInvisible size={ICON_SIZE} />
          )}
        </span>
      }
    />
  );
};
