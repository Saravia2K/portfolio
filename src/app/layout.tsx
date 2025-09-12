import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Galaxy from "@/components/react-bits/galaxy";

import "./globals.css";

export const metadata: Metadata = {
  title: "Diego Saravia",
  description: "Mi portafolio",
};

const onestFont = Onest({
  fallback: ["Roboto"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`min-w- h-dvh min-h-dvh w-screen max-w-screen bg-black lg:max-h-dvh lg:overflow-y-hidden ${onestFont.className}`}
      >
        <Galaxy mouseRepulsion={false} mouseInteraction={false} />
        {children}
      </body>
    </html>
  );
}
