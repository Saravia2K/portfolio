import type { PropsWithChildren } from "react";
import moment from "moment";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";

import SonnerProvider from "#/components/providers/SonnetProvider";

import globalStyles from "./global.css?url";
import meImg from "@/assets/images/profile_pic.png";
import { getLocale } from "../paraglide/runtime.js";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Diego Saravia | Portfolio",
      },
      {
        name: "description",
        content: "Portfolio de Diego Saravia",
      },
      {
        name: "og:description",
        content:
          "Mira el camino que he recorrido en mi carrera profesional y como puedo ayudarte a cumplir los objetivos digitales que tienes para tu negocio",
      },
      { name: "og:image", content: meImg },
      { name: "og:image:type", content: "image/png" },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "630" },
      { name: "og:image:alt", content: "Diego Saravia" },
      { name: "og:title", content: "Diego Saravia" },
      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://diegosaravia.com" },
      { name: "og:site_name", content: "Diego Saravia" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalStyles,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const locale = getLocale();
  moment.locale(locale);
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body className="relative flex min-h-dvh w-screen max-w-screen min-w-screen flex-col items-center justify-center bg-black pt-40">
        <SonnerProvider>
          <Background>
            {children}
            <Footer />
            <TanStackDevtools
              config={{
                position: "bottom-right",
              }}
              plugins={[
                {
                  name: "Tanstack Router",
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
            <Scripts />
          </Background>
        </SonnerProvider>
      </body>
    </html>
  );
}

function Background({ children }: PropsWithChildren) {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
      <div className="absolute top-[-10%] right-0 left-0 h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      {children}
    </>
  );
}

function Footer() {
  return (
    <footer className="m-4 rounded-lg shadow-sm dark:bg-gray-900">
      <div className="mx-auto w-full max-w-7xl p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025 Diego José Saravia Zaldaña. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}
