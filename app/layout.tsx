import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ultra-Luxe Glass Hero V1",
  description: "Portfolio 2024 - Ultra Precision Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${syne.variable} ${outfit.variable} antialiased bg-warm-charcoal text-pearl font-body overflow-x-hidden selection:bg-white selection:text-black min-h-screen relative`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#1c1917]/20 blur-[150px] animate-float-slow"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-[#151413]/30 blur-[120px] animate-float-slower"></div>
        </div>
        <div className="relative z-10 flex flex-col w-full">
            {children}
        </div>
      </body>
    </html>
  );
}
