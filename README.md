# jlinktree

Página de links (estilo Linktree) do João Guilherme Bortoletto — portfólio, site da empresa, redes sociais e projetos pessoais. Produção em [links.bortolettotech.com](https://links.bortolettotech.com).

## Stack

Next.js (App Router) + TypeScript + Tailwind v4, sem banco de dados e sem painel admin.

## Adicionando/removendo links

Única coisa que precisa editar é `src/config/links.ts`. Cada grupo (`linkGroups`) vira uma seção sanfonada (accordion) na página, com `title`, `defaultOpen` (estado inicial aberto/fechado) e uma lista de `items` (label, descrição, URL e ícone).

Ícones disponíveis estão em `src/lib/icons.tsx` — pra adicionar um novo, inclua no `ICONS` (ícones genéricos vêm do [lucide-react](https://lucide.dev); marcas de terceiros ficam em `src/lib/brand-icons.tsx`).

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy

Mesmo pipeline dos outros projetos (`jdraw`, `jhost`): build local, imagem publicada em `hub.bortolettotech.com`, deploy via SSH.

```bash
./devops/ci-cd.sh <versão>
```
