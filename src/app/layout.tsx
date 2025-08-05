import type { Metadata } from "next";
import { Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";

const ubuntuMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nqh.docs",
  description: "store all documents for nqh apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuMono.variable} antialiased min-h-screen bg-gradient-to-br from-gray-700 to-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
