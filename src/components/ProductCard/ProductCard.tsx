import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import type { ProductCardProps } from "./ProductCard.types";
import { variants } from "./ProductCard.styles";

export const ProductCard = ({ variant, onClick }: ProductCardProps) => {
  const variantStyles = variants[variant || "default"];

  return (
    <div
      className={variantStyles.root}
      onClick={() => onClick && onClick({} as any)}
    >
      <div className={variantStyles.imgWrapper}>
        {/* trocar por img */}
        <Image
          src="/images/product.jpg"
          alt="Picture of the author"
          className="object-cover"
          fill
          placeholder="blur"
          blurDataURL="/images/product.jpg"
        />
        <span className={variantStyles.detailsButton}>
          <AiOutlinePlus size={26} />
        </span>
      </div>
      <div className={variantStyles.infoContainer}>
        <span className={variantStyles.productName}>Pizza Calabreza</span>
        <span className={variantStyles.details}>
          Alho poró orgânico da nossa própria horta, crem cheese Polenghi,
          assada em forno à lenha e finalizados com manjericão fresco sadopajks
          apdoska pdoaskdpoaskdasopkdpaosk daso dopas kdasok dpas
        </span>
        <div className={variantStyles.priceContainer}>
          <strong className={variantStyles.promotionalPrice}>R$34,10</strong>
          <strong className={variantStyles.finalPrice}>R$32,10</strong>
        </div>
      </div>
    </div>
  );
};
