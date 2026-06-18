import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anh Do Tran Tuan — Frontend Developer",
  description:
    "Portfolio of Anh Do Tran Tuan, a frontend-focused developer building thoughtful digital products with React, Next.js, and TypeScript.",
  keywords: [
    "Anh Do Tran Tuan",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Ho Chi Minh City",
  ],
  openGraph: {
    title: "Anh Do Tran Tuan — Frontend Developer",
    description:
      "Frontend-focused developer crafting fast, thoughtful digital products.",
    type: "website",
  },
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
