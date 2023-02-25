import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import type { BackButtonProps } from "./BackButton.types";
import { useRouter } from "next/router";

export const BackButton = ({ onClick }: BackButtonProps) => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <span
      className="flex cursor-pointer items-center gap-2 text-red-600"
      onClick={onClick || goBack}
    >
      <FaArrowLeft /> Voltar
    </span>
  );
};
