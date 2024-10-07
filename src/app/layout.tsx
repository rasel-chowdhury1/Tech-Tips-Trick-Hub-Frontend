import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";

import { siteConfig } from "@/src/config/site";
import { Providers } from "../lib/Providers";
import { Roboto } from "next/font/google";
import clsx from "clsx";
import { fontSans } from "../config/fonts";
import DetectReload from "../components/actions/DetectReload";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-slate-50 dark:bg-black",
          roboto.className,
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="container mx-auto max-w-[1920px]">
            {children}
            <DetectReload />
          </main>
        </Providers>
      </body>
    </html>
  );
}
