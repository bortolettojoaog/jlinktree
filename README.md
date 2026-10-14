# jlinktree

> A Linktree-style link hub — portfolio, company site, social profiles and personal projects, all in one place

![Project Banner](./assets/banner.png)

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Preview](#-preview)
- [Prerequisites](#-prerequisites)
- [Installation and Setup](#-installation-and-setup)
- [Managing Links](#-managing-links)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 About the Project

**jlinktree** is a single-page link hub, in the same spirit as Linktree — built by BortolettoTech as a lightweight alternative with no backend, no database and no admin panel. Every link lives in one typed config file, and the page itself auto-generates its own social share card.

### Why this instead of an off-the-shelf tool?

- ✅ **No third party** — fully self-hosted, no account/plan on an external link-in-bio service
- ✅ **Config-driven** — add or remove a button by editing one file, no admin UI needed
- ✅ **Real share cards** — Open Graph/Twitter image generated on the fly, so WhatsApp/Instagram/Twitter previews always match the page
- ✅ **Fast & static** — prerendered at build time, no database round-trips

## 🚀 Features

- **Grouped, collapsible sections** — related links fold into an accordion; visitors scroll only through what they choose to open
- **Configurable default state** — each section decides whether it starts open or collapsed
- **Dynamic OG/Twitter image** — the share-preview card is rendered server-side from the same profile data as the page
- **Dark, branded theme** — consistent with BortolettoTech's other public-facing sites

## 🛠 Technologies Used

- **Next.js** (App Router) — React framework
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling
- **lucide-react** — iconography
- **next/og** (`ImageResponse`) — dynamic Open Graph / Twitter card generation

## 🖼 Preview

![jlinktree screenshot](./assets/screenshot.png)

## 📋 Prerequisites

- **Node.js 22+** ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

## 🚀 Installation and Setup

1. **Clone the repository**

```bash
git clone https://github.com/bortolettojoaog/jlinktree.git
cd jlinktree
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the dev server**

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## 🔗 Managing Links

There's no admin panel by design — everything lives in [`src/config/links.ts`](./src/config/links.ts):

```ts
export const linkGroups: LinkGroup[] = [
  {
    id: "social",
    title: "Social",
    defaultOpen: false, // starts collapsed
    items: [
      {
        id: "github",
        label: "GitHub",
        description: "@bortolettojoaog",
        href: "https://github.com/bortolettojoaog",
        icon: "github",
      },
      // ...
    ],
  },
];
```

To add a link: add an entry to the relevant group's `items` array (or create a new group). To change a section's initial state, flip its `defaultOpen` flag. Available icons live in [`src/lib/icons.tsx`](./src/lib/icons.tsx) — generic ones come from [lucide-react](https://lucide.dev), third-party brand marks are hand-embedded in [`src/lib/brand-icons.tsx`](./src/lib/brand-icons.tsx).

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx            # fonts, metadata, Open Graph/Twitter config
│   ├── page.tsx               # page composition
│   ├── opengraph-image.tsx    # dynamic OG share card
│   ├── twitter-image.tsx      # dynamic Twitter share card
│   └── icon.tsx                # dynamic favicon
├── components/
│   ├── Avatar.tsx              # profile photo
│   ├── LinkCard.tsx            # single link button
│   └── LinkSection.tsx         # collapsible group of links
├── config/
│   └── links.ts                 # profile + all link groups — the only file you edit
└── lib/
    ├── icons.tsx                 # icon key → component map
    ├── brand-icons.tsx           # hand-embedded third-party brand marks
    └── og-image.tsx              # shared layout for the OG/Twitter cards
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

<div align="center">
  <p>Developed with ❤️ by <strong>BortolettoTech</strong></p>
  <p>⭐ If this project was helpful, consider giving it a star!</p>
</div>
