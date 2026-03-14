import { createFileRoute } from "@tanstack/react-router";

import Experience from "#/components/sections/experience";

export const Route = createFileRoute(
  "/_portfolio/_with_back_button/experiencia",
)({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Diego Saravia | Experiencia",
      },
      {
        name: "description",
        content:
          "Experiencia de Diego Saravia, ingeniero de software con experiencia en desarrollo web.",
      },
    ],
  }),
});

function RouteComponent() {
  return <Experience asPage />;
}
