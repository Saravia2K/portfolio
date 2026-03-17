import { createFileRoute } from "@tanstack/react-router";
import Projects from "#/components/sections/projects";

export const Route = createFileRoute("/_portfolio/_with_back_button/proyectos")(
  {
    component: RouteComponent,
    head: () => ({
      meta: [
        {
          title: "Diego Saravia | Proyectos",
        },
        {
          name: "description",
          content:
            "Proyectos de Diego Saravia, ingeniero de software con experiencia en desarrollo web.",
        },
      ],
    }),
  },
);

function RouteComponent() {
  return <Projects asPage />;
}
