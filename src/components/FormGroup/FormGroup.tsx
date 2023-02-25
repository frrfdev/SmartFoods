import React, { useEffect, useRef } from "react";
import type { FormGroupProps } from "./FormGroup.types";
import { motion } from "framer-motion";

import autoAnimate from "@formkit/auto-animate";

export const FieldGroup = ({
  children,
  label,
  errors,
  touched,
  isRequired,
}: FormGroupProps) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <motion.div
      className="items-left flex w-full flex-col gap-1 text-gray-600"
      ref={parentRef}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <label className="flex gap-1">
        {isRequired ? <strong className="text-red-600">*</strong> : null}
        <strong>{label}</strong>
      </label>
      {children}
      {errors && touched && (
        <span className="font-bold text-red-600">{errors}</span>
      )}
    </motion.div>
  );
};
