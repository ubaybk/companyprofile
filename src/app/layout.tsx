import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rumah-Ubay",
  description: "Generated by create next app",
  icons:{
    icon:['/icon/favicon.ico?v=4'],
    apple:['/icon/apple-touch-icon.png?v=4'],
    shortcut:['/icon/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
