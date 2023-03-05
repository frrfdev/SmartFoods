import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import type { ProductCardProps } from "./ProductCard.types";
import { variants } from "./ProductCard.styles";
import { Formatter } from "../../utils/formatter";

export const ProductCard = ({
  variant,
  onClick,
  product,
}: ProductCardProps) => {
  const variantStyles = variants[variant || "default"];

  return (
    <div
      className={variantStyles.root}
      onClick={() => onClick && onClick(product)}
    >
      <div className={variantStyles.imgWrapper}>
        {/* trocar por img */}
        <Image
          src={
            product.images?.[0]
              ? URL.createObjectURL(product.images?.[0])
              : "/images/product.jpg"
          }
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
        <span className={variantStyles.productName}>{product.title}</span>
        <span className={variantStyles.details}>{product.description}</span>
        <div className={variantStyles.priceContainer}>
          {product.promotionalPrice ? (
            <strong className={variantStyles.promotionalPrice}>
              {Formatter.brl(product.price)}
            </strong>
          ) : null}
          <strong className={variantStyles.finalPrice}>
            {Formatter.brl(
              product.promotionalPrice
                ? product.promotionalPrice
                : product.price
            )}
          </strong>
        </div>
      </div>
    </div>
  );
};
