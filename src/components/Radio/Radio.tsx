import React from "react";
import type { RadioProps } from "./Radio.types";
import crypto from "crypto";

export const Radio = ({
  value,
  name,
  content,
  disabled,
  onChange,
  className,
}: RadioProps) => {
  const id = crypto.randomBytes(20).toString("hex");

  return (
    <div
      className={`flex items-center justify-between ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <label
        htmlFor={id}
        className={` w-full
			${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <div>{content}</div>
      </label>
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        disabled={disabled}
        onChange={onChange}
        className={`h-[20px] w-[20px] text-red-600 disabled:bg-gray-200 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        } accent-red-600 checked:animate-fadein`}
      />
    </div>
  );
};
