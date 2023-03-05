import React from "react";
import { AdditionalRadioLabel } from "./AdditionalRadioLabel/AdditionalRadioLabel";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { useAuthContext } from "../../context/AuthContext";
import type { ProductConfigData } from "../ProductForm/ProductForm";

interface Props {
  config: ProductConfigData;
}

export const CategorySection = ({ config }: Props) => {
  const { isUserAuthenticated } = useAuthContext();

  return (
    <>
      <div className="mt-4">{config.title}</div>

      <div className="mt-2 flex flex-col gap-4 rounded-md p-4 shadow-md">
        {isUserAuthenticated ? (
          config.configs.map(({ key, label, price }) => (
            <AdditionalRadioLabel
              name={label as string}
              price={price}
              key={key}
            />
          ))
        ) : (
          <RadioGroup
            onChange={(e) => {
              console.log(e.target.value);
            }}
            optionsClassName="mb-2 last:mb-0"
            options={config.configs.map((product) => ({
              label: (
                <AdditionalRadioLabel
                  name={product.label as string}
                  price={product.price}
                />
              ),
              value: product.key,
              key: product.key,
              name: "borda",
            }))}
          ></RadioGroup>
        )}
      </div>
    </>
  );
};
