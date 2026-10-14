import { ArrowUpRight } from "lucide-react";
import { ICONS } from "@/lib/icons";
import type { LinkItem } from "@/config/links";

export function LinkCard({ item }: { item: LinkItem }) {
  const Icon = ICONS[item.icon];

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/30 hover:bg-white/[0.08]"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/5 text-neutral-300 transition-colors duration-300 group-hover:text-amber-200">
        <Icon className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate font-heading text-base tracking-wide text-neutral-100">
          {item.label}
        </span>
        <span className="block truncate font-body text-sm text-neutral-400">
          {item.description}
        </span>
      </span>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-200" />
    </a>
  );
}
