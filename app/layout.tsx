import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordan Chen",
  description: "Jordan Chen — full-stack, AI, and data science developer",
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
