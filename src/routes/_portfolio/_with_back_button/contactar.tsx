import { createFileRoute } from "@tanstack/react-router";
import Contact from "#/components/sections/contact";

export const Route = createFileRoute("/_portfolio/_with_back_button/contactar")(
  {
    component: RouteComponent,
    head: () => ({
      meta: [
        {
          title: "Diego Saravia | Contactar",
        },
        {
          name: "description",
          content:
            "Contacta a Diego Saravia, ingeniero de software con experiencia en desarrollo web.",
        },
      ],
    }),
  },
);

function RouteComponent() {
  return <Contact asPage />;
}
