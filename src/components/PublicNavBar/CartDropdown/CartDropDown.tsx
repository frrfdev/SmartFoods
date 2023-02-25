import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Cart } from "../../Cart/Cart";
import { CountTooltip } from "../../CountTooltip/CountTooltip";
import { useCartContext } from "../../../context/CartContext";

export const CartDropDown = () => {
  const { products } = useCartContext();

	const [open, setOpen] = React.useState(false);

  return (
    <DropdownMenu.Root open={open}>
      <CountTooltip count={products.length}>
        <DropdownMenu.Trigger asChild>
          <div className="flex cursor-pointer items-center justify-center rounded-md bg-gray-100 p-5 text-gray-400 hover:bg-red-600 hover:text-white" onClick={() => setOpen(!open)}>
            <FaCartArrowDown />
          </div>
        </DropdownMenu.Trigger>
      </CountTooltip>

      <DropdownMenu.Portal>
        <DropdownMenu.Content onInteractOutside={() => setOpen(false)}>
          <DropdownMenu.Item className="mr-4 mt-2">
            <Cart />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
