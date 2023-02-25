import React from "react";
import type { InputProps } from "./Input.types";

export const Input = ({
  prefix: Prefix,
  suffix: Suffix,
  variant = "normal",
  textarea = false,
  ...props
}: InputProps) => {
  const normal = "bg-white border-b-2 border-red-100";
  const outlined =
    "bg-white border-2 border-gray-100 rounded-md overflow-hidden px-2";
  const clean = "border-0 bg-transparent";

  const getStyling = () => {
    switch (variant) {
      case "normal":
        return normal;
      case "outlined":
        return outlined;
      case "clean":
        return clean;
      default:
        return normal;
    }
  };

  return (
    <div
      className={`flex items-center gap-2 leading-9 text-black outline-none placeholder:text-gray-400 ${getStyling()}`}
    >
      {Suffix ? Suffix : null}
      {textarea ? (
        <textarea
          className="w-full"
          {...(props as any)}
          style={{ background: "none" }}
        />
      ) : (
        <input className="w-full" {...props} style={{ background: "none" }} />
      )}
      {Prefix ? Prefix : null}
    </div>
  );
};
