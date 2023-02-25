import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import * as SelectRadix from "@radix-ui/react-select";
import type { SelectProps } from "./Select.types";

const SelectItem = React.forwardRef(
  ({ children, disabled, ...props }: any, forwardedRef) => {
    const enabledClass = "cursor-pointer p-2 hover:bg-red-600 hover:text-white";
    const disabledClass = "bg-gray-100 text-gray-400";

    return (
      <SelectRadix.Item
        {...props}
        className={`p-2 ${disabled ? disabledClass : enabledClass}`}
        ref={forwardedRef}
        disabled={disabled}
      >
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
        {/* <SelectRadix.ItemIndicator className="SelectItemIndicator">
          <AiOutlineDown />
        </SelectRadix.ItemIndicator> */}
      </SelectRadix.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export const Select = ({
  options,
  placeholder = "",
  ...props
}: SelectProps) => {
  return (
    <SelectRadix.Root {...props}>
      <SelectRadix.Trigger
        className="flex h-[40px] items-center justify-between rounded-md border-2 border-gray-100 px-3 text-start"
        aria-label="Food"
      >
        <SelectRadix.Value placeholder={placeholder} />
        <SelectRadix.Icon className="SelectIcon">
          <AiOutlineDown />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal className="max-h-[100px] overflow-auto">
        <SelectRadix.Content className="max-h-[100px] w-full overflow-auto rounded-md bg-white drop-shadow-md">
          <SelectRadix.ScrollUpButton className="SelectScrollButton">
            <span className="flex w-full justify-center py-2">
              <AiOutlineUp />
            </span>
          </SelectRadix.ScrollUpButton>
          <SelectRadix.Viewport className="SelectViewport">
            <SelectRadix.Group>
              <SelectItem key={"empty"} value={""} disabled>
                {placeholder}
              </SelectItem>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  <span>{option.textValue}</span>
                </SelectItem>
              ))}
            </SelectRadix.Group>
          </SelectRadix.Viewport>
          <SelectRadix.ScrollDownButton className="text-red w-full text-center">
            <span className="flex w-full justify-center py-2">
              <AiOutlineDown />
            </span>
          </SelectRadix.ScrollDownButton>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  );
};
