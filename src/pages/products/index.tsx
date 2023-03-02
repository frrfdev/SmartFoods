import React from "react";
import { PrivatePage } from "../../components/PrivatePage/PrivatePage";
import { ProductsFilter } from "../../components/ProductsFilter/ProductsFilter";
import { Button } from "../../components/Button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductCategory } from "../../components/ProductCategory/ProductCategory";
import { useSelected } from "../../hooks/utils/useSelected";
import { useRouter } from "next/router";
import type { ProductData } from "../../@types/ProductData";
import { PrivateComponent } from "../../components/PrivateComponent/PrivateComponent";
import { useAuthContext } from "../../context/AuthContext";
import { ProductPreviewModal } from "../../components/ProductPreviewModal/ProductPreviewModal";
import { ProductComboModal } from "../../components/ProductComboModal/ProductComboModal";

export const Products = () => {
  const router = useRouter();
  const { user } = useAuthContext();

  const { handleSelect, isSelected } = useSelected("all");
  const [selectedCombo, setSelectedCombo] = React.useState<
    ProductData | undefined
  >(undefined);

  const handleNewProduct = () => router.push("/products/create");

  const handleSelectCombo = (product: ProductData) => {
    setSelectedCombo(product);
  };

  return (
    <PrivatePage>
      <div className="lg: flex flex-col gap-8 px-4 lg:px-20">
        <div className="flex justify-between gap-4">
          <ProductsFilter handleSelect={handleSelect} isSelected={isSelected} />
          <PrivateComponent>
            <Button round onClick={handleNewProduct}>
              <span>
                <AiOutlinePlus size={20}></AiOutlinePlus>
              </span>
            </Button>
          </PrivateComponent>
        </div>

        <ProductCategory onClick={handleSelectCombo} />
      </div>

      {selectedCombo ? (
        user ? (
          <ProductPreviewModal
            product={selectedCombo}
            open={!!selectedCombo}
            onClose={() => setSelectedCombo(undefined)}
          ></ProductPreviewModal>
        ) : (
          <ProductComboModal
            product={selectedCombo}
            open={!!selectedCombo}
            onClose={() => setSelectedCombo(undefined)}
          ></ProductComboModal>
        )
      ) : null}
    </PrivatePage>
  );
};

export default Products;
