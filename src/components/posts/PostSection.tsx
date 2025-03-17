"use client";
import { Collapsible } from "radix-ui";
import "../../../public/styles.css";
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function PostSection({ children }: { children: string[] }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Collapsible.Root
        className="CollapsibleRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <div className={"flex flex-row"}>
          <Collapsible.Trigger asChild>
            <button className="IconButton">
              {open ? <ChevronDown /> : <ChevronRight />}
            </button>
          </Collapsible.Trigger>

          <div className={"mb-2"}>{children[0]}</div>
        </div>

        <Collapsible.Content>
          <ul>
            {children.slice(1).map((child: string, i: number) => (
              <li className={"block mb-5"} key={i}>
                {child}
              </li>
            ))}
          </ul>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
