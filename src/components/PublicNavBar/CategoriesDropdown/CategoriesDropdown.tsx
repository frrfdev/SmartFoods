import React, { useMemo } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected: boolean;
}

const DropdownMenuItem = ({
  children,
  onClick,
  isSelected,
}: DropdownMenuItemProps) => {
  const selected = isSelected ? "bg-red-600 text-white" : "";

  return (
    <div
      className={`flex cursor-pointer items-center gap-2 p-4 hover:bg-red-600 hover:text-white ${selected}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </div>
  );
};

export const CategoriesDropdown = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = React.useState("");

  const categories = useMemo(() => {
    return [
      {
        label: "Todos",
        value: "all",
      },
      {
        label: "Pizza",
        value: "pizza",
      },
      {
        label: "Hamburger",
        value: "hamburger",
      },
      {
        label: "Hotdog",
        value: "hotdog",
      },
      {
        label: "Sorvete",
        value: "icecream",
      },
      {
        label: "Bebida",
        value: "drink",
      },
      {
        label: "Oferta",
        value: "promo",
      },
    ];
  }, []);

  const selectedCategory = useMemo(
    () => categories.find((category) => category.value === selectedCategoryId),
    [selectedCategoryId, categories]
  );

  return (
    <DropdownMenu.Root open={open} modal>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-2"
          aria-label="Customise options"
          onClick={() => setOpen(!open)}
        >
          <strong className="whitespace-nowrap">
            {!selectedCategoryId || selectedCategoryId === "all"
              ? "Categorias"
              : selectedCategory?.label}
          </strong>
          <span className="text-red-600">
            <FaChevronDown />
          </span>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal className="w-full">
        <DropdownMenu.Content
          onInteractOutside={() => setOpen(false)}
          className="w-full overflow-hidden rounded-md border-2 bg-white text-red-600"
        >
          {categories.map(({ value, label }) => {
            return (
              <DropdownMenuItem
                key={value}
                onClick={() => {
                  setSelectedCategoryId(value);
                  setOpen(false);
                }}
                isSelected={value === selectedCategory?.value}
              >
                {label}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
