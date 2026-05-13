import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const syne = Syne({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-syne",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "NEOCHAT",
  description: "Chat loud. Speak bold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", syne.variable, ibmPlexMono.variable)}
    >
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}
