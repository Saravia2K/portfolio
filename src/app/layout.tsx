import type { Metadata } from "next";
import { Onest } from "next/font/google";
import moment from "moment";
import Background from "./components/Background";
import Footer from "./components/Footer";

import "./globals.css";
import "moment/locale/es";
import meImg from "@/assets/images/profile_pic.png";

export const metadata: Metadata = {
  title: "Diego Saravia",
  description: "Mi portafolio",
  openGraph: {
    title: "Portafolio de Diego Saravia",
    description:
      "Mira el camino que he recorrido en mi carrera profesional y como puedo ayudarte a cumplir los objetivos digitales que tienes para tu negocio",
    type: "website",
    locale: "es",
    images: meImg.src,
  },
};

const onestFont = Onest({
  fallback: ["Roboto"],
  preload: true,
  weight: ["100", "200", "300", "400", "500", "600", "800", "900"],
  subsets: ["latin"],
});

moment.locale("es");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${onestFont.className} relative flex min-h-dvh w-screen max-w-screen min-w-screen flex-col items-center justify-center bg-black pt-40`}
      >
        <Background>
          {children}
          <Footer />
        </Background>
      </body>
    </html>
  );
}
