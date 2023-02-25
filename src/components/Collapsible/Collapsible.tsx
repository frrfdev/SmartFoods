import React, { useRef, useEffect } from "react";
import * as CollapsibleRadix from "@radix-ui/react-collapsible";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import type { CollapsibleProps } from "./Collapsible.types";
import autoAnimate from "@formkit/auto-animate";

export const Collapsible = ({ prefix, title, content }: CollapsibleProps) => {
  const parentRef = useRef(null);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <CollapsibleRadix.Root
      className="rounded-md border-2 border-gray-200 bg-gray-100 p-4"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CollapsibleRadix.Trigger asChild>
          <div className="flex w-full items-center justify-between">
            <span className="flex items-center gap-2">
              {prefix || null}
              {title}
            </span>
            <button className="IconButton">
              {open ? <BiChevronUp /> : <BiChevronDown />}
            </button>
          </div>
        </CollapsibleRadix.Trigger>
      </div>

      <CollapsibleRadix.Content>{content}</CollapsibleRadix.Content>
    </CollapsibleRadix.Root>
  );
};
