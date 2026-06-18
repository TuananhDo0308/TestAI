import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stillform — Dialog Motion Study",
  description:
    "A polished, accessible dialog motion study built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
