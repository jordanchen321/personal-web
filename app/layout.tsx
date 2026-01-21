import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name",
  description: "Personal academic profile",
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
