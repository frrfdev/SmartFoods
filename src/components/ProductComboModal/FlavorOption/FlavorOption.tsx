import Image from "next/image";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { Button } from "../../Button/Button";
import type { FlavorOptionProps } from "./FlavorOption.types";
import { ButtonProps } from "../../Button/Button.types";

export const FlavorOption = ({
  name,
  description,
  price,
  quantity = 0,
  id,
  onClick,
}: FlavorOptionProps) => {
  const { isUserAuthenticated } = useAuthContext();

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div>{name}</div>
          <div className="text-sm text-gray-400">{description}</div>
          <div>R$ {price}</div>
        </div>
        {!isUserAuthenticated ? (
          <div className="flex flex-col justify-center shadow-inner">
            <div className="relative h-[100px] min-h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-t-md">
              <Image
                src="/images/product.jpg"
                alt="Picture of the author"
                className="object-cover"
                fill
                placeholder="blur"
                blurDataURL="/images/product.jpg"
              />
            </div>
            <div className="flex w-full items-center justify-between overflow-hidden rounded-b-md font-bold text-white">
              <FlavorOptionQuantityButton
                onClick={() => onClick(id, quantity - 1)}
                disabled={quantity === 0}
              >
                -
              </FlavorOptionQuantityButton>
              <span className="w-full bg-red-600 text-center">{quantity}</span>
              <FlavorOptionQuantityButton
                onClick={() => onClick(id, quantity + 1)}
              >
                +
              </FlavorOptionQuantityButton>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const FlavorOptionQuantityButton = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="bg-red-600 px-3  disabled:bg-gray-200" {...props}>
      {children}
    </button>
  );
};
