import Image from "next/image";
import React from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { Button } from "../../Button/Button";
import type { FlavorOptionProps } from "./FlavorOption.types";

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
      <div className="flex items-center justify-between">
        <div>
          <div>{name}</div>
          <div className="text-sm text-gray-400">{description}</div>
          <div>R$ {price}</div>
        </div>
        <div className="relative h-[100px] min-h-[100px] w-[100px] min-w-[100px] overflow-hidden rounded-md">
          <Image
            src="/images/product.jpg"
            alt="Picture of the author"
            className="object-cover"
            fill
            placeholder="blur"
            blurDataURL="/images/product.jpg"
          />
        </div>
      </div>
      {!isUserAuthenticated ? (
        <div className="mt-2 flex w-full items-center justify-end gap-2">
          <Button
            size="sm"
            round
            onClick={() => onClick(id, quantity - 1)}
            disabled={quantity === 0}
          >
            -
          </Button>
          {quantity}
          <Button size="sm" round onClick={() => onClick(id, quantity + 1)}>
            +
          </Button>
        </div>
      ) : null}
    </div>
  );
};
