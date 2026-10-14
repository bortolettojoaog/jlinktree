import { Building2, Link2, Rocket, User } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubGlyph, GoogleGlyph, LinkedinGlyph } from "@/lib/brand-icons";

export const ICONS = {
  user: User,
  building: Building2,
  rocket: Rocket,
  link: Link2,
  github: GithubGlyph,
  google: GoogleGlyph,
  linkedin: LinkedinGlyph,
} satisfies Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

export type IconKey = keyof typeof ICONS;
