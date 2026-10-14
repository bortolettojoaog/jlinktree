import type { Metadata } from "next";
import { Baloo_Da_2, Lato } from "next/font/google";
import "./globals.css";
import { profile } from "@/config/links";

const headingFont = Baloo_Da_2({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const APP_TITLE = `${profile.name} | Links`;
const APP_DESCRIPTION = `Portfólio, site da empresa, redes sociais e projetos de ${profile.name} — tudo em um só lugar.`;
const APP_URL = "https://links.bortolettotech.com";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    url: APP_URL,
    siteName: profile.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_TITLE,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
