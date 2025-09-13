import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Background from "./components/Background";

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
        className={`${onestFont.className} relative min-h-dvh w-screen max-w-screen min-w-screen bg-black pt-40`}
      >
        <Background>{children}</Background>
      </body>
    </html>
  );
}
