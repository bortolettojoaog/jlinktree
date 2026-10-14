import type { IconKey } from "@/lib/icons";

export type LinkItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: IconKey;
};

export type LinkGroup = {
  id: string;
  title: string;
  /** Estado inicial do sanfonado — o visitante pode abrir/fechar à vontade. */
  defaultOpen: boolean;
  items: LinkItem[];
};

/**
 * Única fonte de verdade dos botões da página. Pra adicionar/remover um
 * link, mexe só aqui — não precisa tocar em nenhum componente.
 */
export const profile = {
  name: "João Guilherme Bortoletto",
  initials: "JGB",
  tagline: "Engenheiro de Software · BortolettoTech",
};

export const linkGroups: LinkGroup[] = [
  {
    id: "main",
    title: "Principais",
    defaultOpen: true,
    items: [
      {
        id: "portfolio",
        label: "Portfólio pessoal",
        description: "me.bortolettotech.com",
        href: "https://me.bortolettotech.com",
        icon: "user",
      },
      {
        id: "empresa",
        label: "BortolettoTech",
        description: "Site da empresa",
        href: "https://bortolettotech.com",
        icon: "building",
      },
    ],
  },
  {
    id: "social",
    title: "Redes sociais",
    defaultOpen: false,
    items: [
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "@bortolettojoaog",
        href: "https://www.linkedin.com/in/bortolettojoaog/",
        icon: "linkedin",
      },
      {
        id: "github",
        label: "GitHub",
        description: "@bortolettojoaog",
        href: "https://github.com/bortolettojoaog",
        icon: "github",
      },
      {
        id: "google",
        label: "Google Developer",
        description: "g.dev/bortolettojoaog",
        href: "https://g.dev/bortolettojoaog",
        icon: "google",
      },
    ],
  },
  {
    id: "projects",
    title: "Projetos pessoais",
    defaultOpen: false,
    items: [
      {
        id: "jdraw",
        label: "jDraw",
        description: "jdraw.bortolettotech.com",
        href: "https://jdraw.bortolettotech.com",
        icon: "rocket",
      },
      {
        id: "slink",
        label: "sLink",
        description: "Encurtador de links",
        href: "https://slink.bortolettotech.com",
        icon: "link",
      },
    ],
  },
];
