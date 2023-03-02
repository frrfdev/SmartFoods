import React from "react";
import type { ProductComboModalProps } from "./ProductComboModal.types";
import { Dialog } from "@mui/material";
import { RadioGroup } from "../RadioGroup/RadioGroup";
import { AdditionalRadioLabel } from "./AdditionalRadioLabel/AdditionalRadioLabel";
import { useAuthContext } from "../../context/AuthContext";
import { FlavorOption } from "./FlavorOption/FlavorOption";
import { Input } from "../Input/Input";
import { FieldGroup } from "../FormGroup/FormGroup";
import { Button } from "../Button/Button";

const additionals = [
  { id: "1", name: "Borda de cheedar", price: 3.5 },
  { id: "2", name: "Borda de catupiry", price: 3.5 },
  { id: "3", name: "Borda de queijo", price: 3.5 },
  { id: "4", name: "Borda de chocolate", price: 3.5 },
];

const flavors = [
  {
    id: "1",
    name: "Calabresa",
    description: "Mussarela, calabresa, tomate, cebola e orégano",
    price: 29.9,
  },
  {
    id: "2",
    name: "Marguerita",
    description: "Mussarela, tomate, manjericão e orégano",
    price: 29.9,
  },
  {
    id: "3",
    name: "Portuguesa",
    description: "Mussarela, presunto, ovos, cebola, tomate e orégano",
    price: 29.9,
  },
  {
    id: "4",
    name: "Quatro queijos",
    description: "Mussarela, catupiry, provolone, requeijão e orégano",
    price: 29.9,
  },
];

export const ProductComboModal = ({
  product,
  ...props
}: ProductComboModalProps) => {
  const { isUserAuthenticated } = useAuthContext();
  const [flavorsSelected, setFlavorsSelected] = React.useState<
    { id: string; quantity: number }[]
  >([]);
  const [quantity, setQuantity] = React.useState(1);

  const handleChangeFlavors = (id: string, quantity: number) => {
    const flavorIndex = flavorsSelected.findIndex((flavor) => flavor.id === id);
    if (flavorIndex === -1) {
      setFlavorsSelected((prevState) => [...prevState, { id, quantity }]);
    } else {
      setFlavorsSelected((prevState) => {
        const newState = [...prevState];
        const flavor = newState[flavorIndex];
        if (flavor) flavor.quantity = quantity;
        return newState;
      });
    }
  };

  const totalFlavorsPrice = React.useMemo(() => {
    const total = flavorsSelected.reduce((acc, flavor) => {
      const flavorData = flavors.find(
        (flavorData) => flavorData.id === flavor.id
      );
      if (flavorData) {
        return acc + flavorData.price * flavor.quantity;
      }
      return acc;
    }, 0);
    return total;
  }, [flavorsSelected]);

  return (
    <Dialog
      {...props}
      classes={{
        paper: "w-[100%] p-14 m-0 max-w-auto",
        container: "w-full",
      }}
      maxWidth="lg"
    >
      <h3 className="text-4xl">
        {product?.title}
        {"(Combo)"}
      </h3>
      <span className="text-gray-400">{product?.description}</span>

      <div className="mt-4">Borda e massa</div>

      <div className="mt-2 flex flex-col gap-4 rounded-md p-4 shadow-md">
        {isUserAuthenticated ? (
          additionals.map(({ name, price, id }) => (
            <AdditionalRadioLabel name={name} price={price} key={id} />
          ))
        ) : (
          <RadioGroup
            onChange={(e) => {
              console.log(e.target.value);
            }}
            optionsClassName="mb-2 last:mb-0"
            options={additionals.map((additional) => ({
              label: (
                <AdditionalRadioLabel
                  name={additional.name}
                  price={additional.price}
                />
              ),
              value: additional.id,
              key: additional.id,
              name: "borda",
            }))}
          ></RadioGroup>
        )}
      </div>

      <div className="mt-4">Sabores</div>
      <div className="mt-2 flex flex-col gap-4 rounded-md p-4 shadow-md">
        {flavors.map((flavor) => (
          <FlavorOption
            id={flavor.id}
            quantity={
              flavorsSelected.find(
                (flavorSelected) => flavorSelected.id === flavor.id
              )?.quantity || 0
            }
            key={flavor.id}
            name={flavor.name}
            description={flavor.description}
            price={flavor.price}
            onClick={handleChangeFlavors}
          ></FlavorOption>
        ))}
      </div>

      {!isUserAuthenticated ? (
        <div className="mt-4 flex flex-col gap-4">
          <FieldGroup label="Observações">
            <Input
              variant="outlined"
              textarea
              placeholder="Coloque suas observações"
            ></Input>
          </FieldGroup>

          <div>R${totalFlavorsPrice * quantity}</div>

          <div className="flex items-center justify-between">
            <div className="float-left flex overflow-hidden rounded-md bg-yellow-50">
              <button
                disabled={quantity <= 1}
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                  }
                }}
                className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-2 border-transparent bg-red-600 text-white hover:enabled:border-red-600 hover:enabled:bg-white hover:enabled:text-red-600 disabled:bg-gray-400"
              >
                <span>-</span>
              </button>
              <div className="flex h-[30px] w-[30px] items-center justify-center bg-red-600 text-white">
                <span>{quantity}</span>
              </div>
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center border-2 border-transparent bg-red-600 text-white hover:enabled:border-red-600 hover:enabled:bg-white hover:enabled:text-red-600 disabled:bg-gray-400"
              >
                <span>+</span>
              </button>
            </div>

            <Button>Adicionar ao carrinho</Button>
          </div>
        </div>
      ) : null}
    </Dialog>
  );
};
