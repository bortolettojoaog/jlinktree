"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import type { LinkGroup } from "@/config/links";

export function LinkSection({ group }: { group: LinkGroup }) {
  const [open, setOpen] = useState(group.defaultOpen);

  return (
    <section className="flex flex-col">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-2 rounded-lg px-1 py-2 text-left transition-colors duration-200 hover:text-neutral-300"
      >
        <span className="font-body text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          {group.title}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 overflow-hidden pt-1">
          {group.items.map((item) => (
            <LinkCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
